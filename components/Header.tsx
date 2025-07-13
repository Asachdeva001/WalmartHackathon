'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Moon, Sun, Bot, User, Menu, X } from 'lucide-react'
import { useApp } from '@/lib/context'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function Header() {
  const { state, dispatch } = useApp()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const cartItemCount = state.cart.reduce((total, item) => total + item.quantity, 0)

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' })
  }

  const toggleAIAssistant = () => {
    dispatch({ type: 'TOGGLE_AI_ASSISTANT' })
  }

  const navigationItems = [
    { href: '/shop', label: 'Shop' },
    { href: '/store', label: 'In-Store' },
    { href: '/admin', label: 'Admin' }
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div 
            className="text-2xl group-hover:scale-110 transition-transform duration-200"
            whileHover={{ rotate: 5 }}
          >
            🛒
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            SmartMart
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="text-sm font-medium hover:text-primary transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleAIAssistant}
            className="relative hover:bg-primary/10 transition-colors duration-200"
          >
            <Bot className="h-5 w-5" />
            {state.aiAssistantOpen && (
              <motion.div 
                className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="hover:bg-primary/10 transition-colors duration-200"
          >
            <motion.div
              initial={false}
              animate={{ rotate: state.darkMode ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {state.darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.div>
          </Button>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 transition-colors duration-200">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <motion.span 
                  className="absolute -top-2 -right-2 h-6 w-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {cartItemCount}
                </motion.span>
              )}
            </Button>
          </Link>

          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-muted/50">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">
              {state.user?.name || 'Guest'}
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t bg-background/95 backdrop-blur"
          >
            <div className="container py-4 space-y-4">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              <div className="flex items-center justify-between px-4 py-2 border-t">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleAIAssistant}
                    className="relative"
                  >
                    <Bot className="h-5 w-5" />
                    {state.aiAssistantOpen && (
                      <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full" />
                    )}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleDarkMode}
                  >
                    {state.darkMode ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>
                </div>
                
                <Link href="/cart">
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-2 -right-2 h-6 w-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center font-bold">
                        {cartItemCount}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 