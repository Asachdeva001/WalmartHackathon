'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Mic, MicOff, Volume2, VolumeX, Send, X, Bot, Sparkles } from 'lucide-react'
import { useApp } from '@/lib/context'
import { AIAssistantMessage } from '@/lib/types'
import { motion, AnimatePresence } from 'framer-motion'

export function AIAssistant() {
  const { state, dispatch } = useApp()
  const [messages, setMessages] = useState<AIAssistantMessage[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your AI shopping assistant. How can I help you today?',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const speechRef = useRef<SpeechSynthesis | null>(null)

  useEffect(() => {
    speechRef.current = window.speechSynthesis
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const speak = (text: string) => {
    if (!state.readAloud || !speechRef.current) return

    setIsSpeaking(true)
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    speechRef.current.speak(utterance)
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: AIAssistantMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I can help you find products, compare prices, or answer questions about our inventory. What would you like to know?",
        "Great question! Let me search our database for that information.",
        "I found some relevant products that might interest you. Would you like me to show you the details?",
        "That's a popular item! It's currently in stock and we have several options available.",
        "I can help you with product recommendations, pricing information, or store locations. What else would you like to know?"
      ]
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      const assistantMessage: AIAssistantMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: randomResponse,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
      speak(randomResponse)
    }, 1000)
  }

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition is not supported in this browser.')
      return
    }

    setIsListening(true)
    const recognition = new (window as any).webkitSpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      setInputValue(transcript)
      setIsListening(false)
    }

    recognition.onerror = () => {
      setIsListening(false)
    }

    recognition.start()
  }

  const stopListening = () => {
    setIsListening(false)
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-md mx-4 max-h-[80vh]"
        >
          <Card className="w-full h-full flex flex-col border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-primary to-purple-600 rounded-full">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold">AI Assistant</CardTitle>
                  <p className="text-xs text-muted-foreground">Powered by SmartMart AI</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 bg-muted/50 px-3 py-1 rounded-full">
                  <Volume2 className="h-4 w-4" />
                  <Switch
                    checked={state.readAloud}
                    onCheckedChange={toggleReadAloud}
                    className="scale-75"
                  />
                </div>
                <Button variant="ghost" size="icon" onClick={closeAssistant} className="hover:bg-red-500/10 hover:text-red-500">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col space-y-4 p-4">
              <div className="flex-1 overflow-y-auto space-y-4 max-h-64 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-primary to-purple-600 text-primary-foreground'
                            : 'bg-muted border'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <p className="text-xs opacity-70 mt-2">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              <div className="flex space-x-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-primary/10"
                    onClick={isListening ? stopListening : startListening}
                  >
                    {isListening ? (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        <MicOff className="h-4 w-4 text-red-500" />
                      </motion.div>
                    ) : (
                      <Mic className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <Button 
                  onClick={handleSendMessage} 
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {isSpeaking && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center space-x-2 text-sm text-muted-foreground"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <Volume2 className="h-4 w-4" />
                  </motion.div>
                  <span>Speaking...</span>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 