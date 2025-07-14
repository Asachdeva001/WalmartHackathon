'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Mic, MicOff, Volume2, Send, X, Bot, Sparkles } from 'lucide-react'
import { useApp } from '@/lib/context'
import { AIAssistantMessage } from '@/lib/types'
import { motion, AnimatePresence } from 'framer-motion'
import { sampleProducts } from '@/lib/data'


export function AIAssistant() {
  const { state, dispatch } = useApp()
  const [messages, setMessages] = useState<AIAssistantMessage[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hello! I'm your AI shopping assistant. How can I help you today?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Log readAloud changes
  useEffect(() => {
    console.log('🔁 ReadAloud is now', state.readAloud)
  }, [state.readAloud])

  // Scroll on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Ensure voices are loaded
  useEffect(() => {
    const handler = () => {
      console.log('✅ Voices loaded:', window.speechSynthesis.getVoices())
    }
    window.speechSynthesis.onvoiceschanged = handler
    handler()
    return () => { window.speechSynthesis.onvoiceschanged = null }
  }, [])

  // Speak helper
  const speak = (text: string) => {
    // If you want to force-on during testing, comment out the next two lines:
    if (!state.readAloud) return
    if (!window.speechSynthesis) return

    const synth = window.speechSynthesis

    const attempt = () => {
      const voices = synth.getVoices()
      if (!voices.length) {
        return setTimeout(attempt, 100)
      }
      const utt = new SpeechSynthesisUtterance(text)
      // pick an English voice
      const voice =
        voices.find(v => v.lang.startsWith('en') && v.name.includes('Google')) ||
        voices.find(v => v.lang.startsWith('en')) ||
        voices[0]
      if (voice) utt.voice = voice
      utt.pitch = 1
      utt.rate = 1
      utt.volume = 1

      utt.onstart = () => setIsSpeaking(true)
      utt.onend = () => setIsSpeaking(false)
      utt.onerror = () => setIsSpeaking(false)

      synth.cancel()
      synth.speak(utt)
    }

    setTimeout(attempt, 100)
  }

  // Send text message
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMsg: AIAssistantMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }
    setMessages(m => [...m, userMsg])
    setInputValue('')

    try {
      const res = await fetch('http://127.0.0.1:8000/voice-command', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: userMsg.content, products: sampleProducts }),
      })
      const data = await res.json()
      const replyText = data.reply || "Sorry, I didn't get that."
      const botMsg: AIAssistantMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: replyText,
        timestamp: new Date()
      }
      setMessages(m => [...m, botMsg])
      speak(replyText)

      if (Array.isArray(data.actions)) {
        data.actions.forEach((act: any) => {
          // dispatch({ type: 'CART_ACTION', payload: act })
          console.log('🛒 Cart action:', act)
        })
      }
    } catch (e) {
      console.error('❌ send error', e)
      const errMsg: AIAssistantMessage = {
        id: (Date.now() + 2).toString(),
        type: 'assistant',
        content: 'Something went wrong.',
        timestamp: new Date()
      }
      setMessages(m => [...m, errMsg])
    }
  }

  // Voice-only flow
  const startVoiceCommand = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition not supported')
      return
    }
    setIsListening(true)
    const rec = new (window as any).webkitSpeechRecognition()
    rec.continuous = false
    rec.interimResults = false

    rec.onresult = async (e: any) => {
      const text = e.results[0][0].transcript
      setIsListening(false)
      const userMsg: AIAssistantMessage = {
        id: Date.now().toString(),
        type: 'user',
        content: text,
        timestamp: new Date()
      }
      setMessages(m => [...m, userMsg])
      // reuse handleSendMessage logic
      try {
        const res = await fetch('http://127.0.0.1:8000/voice-command', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ command: text, products: sampleProducts }),
        })
        const data = await res.json()
        const replyText = data.reply || "Sorry, I didn't get that."
        const botMsg: AIAssistantMessage = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: replyText,
          timestamp: new Date()
        }
        setMessages(m => [...m, botMsg])
        console.log('🤖 AI reply:', replyText)
        speak(replyText)

        if (Array.isArray(data.actions)) {
        data.actions.forEach((act: any) => {
          // dispatch({ type: 'CART_ACTION', payload: act })
          console.log('🛒 Cart action:', act)
        })
      }
      } catch (e) {
        console.error('❌ voice error', e)
        speak('There was an error.')
      }
    }
    rec.onerror = () => {
      setIsListening(false)
      speak("Sorry, I couldn't hear you.")
    }
    rec.start()
  }

  const toggleReadAloud = () => {
    dispatch({ type: 'TOGGLE_READ_ALOUD' })
  }
  const closeAssistant = () => {
    dispatch({ type: 'TOGGLE_AI_ASSISTANT' })
  }

  if (!state.aiAssistantOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-xl mx-2 max-h-[90vh]"
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.2 }}
        >
          <Card className="flex flex-col bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="flex items-center justify-between bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
              <div className="flex items-center space-x-4">
                <Bot className="h-7 w-7 text-white animate-pulse" />
                <CardTitle className="text-white text-xl font-extrabold">SmartMart AI</CardTitle>
              </div>
              <div className="flex items-center space-x-3">
                <Volume2 className={`h-5 w-5 text-white transition ${state.readAloud ? 'scale-110' : 'opacity-60'}`} />
                <Switch
                  checked={state.readAloud}
                  onCheckedChange={toggleReadAloud}
                  className={`
                    relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full transition-colors
                    ${state.readAloud ? 'bg-blue-600' : 'bg-gray-300'}
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400
                  `}
                >
                  <span
                    className={`
                      pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg transition-transform
                      ${state.readAloud ? 'translate-x-6' : 'translate-x-1'}
                    `}
                  />
                </Switch>

                <Button variant="ghost" size="icon" onClick={closeAssistant} className="text-white hover:bg-red-600/30">
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col gap-4 p-6 bg-white/70 overflow-hidden">
              <div className="flex-1 overflow-y-auto space-y-4 pr-4 max-h-96">
                {messages.map((m, i) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                    className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`${m.type === 'user' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800'} max-w-[65%] px-5 py-3 rounded-2xl shadow-lg`}>
                      <p className="text-base leading-relaxed">{m.content}</p>
                      <p className="text-xs opacity-50 mt-1 text-right">{m.timestamp.toLocaleTimeString()}</p>
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="flex items-center space-x-3">
                <div className="relative flex-1">
                  <input
                    type="text" value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask or command..."
                    className="w-full px-5 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 transition"
                  />
                  <Button
                    variant="ghost" size="icon"
                    onClick={isListening ? () => setIsListening(false) : startVoiceCommand}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {isListening
                      ? <MicOff className="h-5 w-5 text-red-500 animate-ping" />
                      : <Mic className="h-5 w-5 text-purple-600 hover:text-purple-700" />}
                  </Button>
                </div>

                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-full shadow-lg transition"
                >
                  <Send className="h-5 w-5" />
                </Button>

                <Button
                  variant="outline" size="icon"
                  onClick={startVoiceCommand}
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <Sparkles className="h-6 w-6 animate-spin-slow" />
                </Button>
              </div>

              {isSpeaking && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center space-x-2 mt-3 text-gray-700">
                  <Volume2 className="h-5 w-5 text-purple-600 animate-pulse" />
                  <span className="text-sm font-medium">Speaking...</span>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}