'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShoppingCart, Camera, Bot, Volume2, Star, Zap, ArrowRight, Sparkles, Shield, Clock } from 'lucide-react'
import Link from 'next/link'
import { useApp } from '@/lib/context'
import { motion } from 'framer-motion'

export default function HomePage() {
  const { state } = useApp()

  const features = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Smart Shopping",
      description: "AI-powered product recommendations and intelligent search",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "In-Store Experience",
      description: "Use your camera to identify products and get instant information",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Assistant",
      description: "Voice-controlled shopping assistant available 24/7",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Volume2 className="h-8 w-8" />,
      title: "Accessibility",
      description: "Read aloud feature for enhanced accessibility",
      color: "from-orange-500 to-red-600"
    }
  ]

  const stats = [
    { label: "Products", value: "500+", icon: <ShoppingCart className="h-5 w-5" /> },
    { label: "Happy Customers", value: "10K+", icon: <Star className="h-5 w-5" /> },
    { label: "AI Accuracy", value: "99.9%", icon: <Zap className="h-5 w-5" /> },
    { label: "Response Time", value: "<1s", icon: <Clock className="h-5 w-5" /> }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              AI-Powered Shopping Experience
            </div>
            <div className="text-6xl mb-4 animate-bounce">🛒</div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent leading-tight">
              SmartMart
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              The future of shopping is here. Experience AI-powered e-commerce with 
              <span className="font-semibold text-primary"> in-store detection</span>, 
              <span className="font-semibold text-primary"> voice assistant</span>, and 
              <span className="font-semibold text-primary"> accessibility features</span>.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/shop">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/store">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Camera className="mr-2 h-5 w-5" />
                Try In-Store
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="flex justify-center mb-2 text-primary">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="h-4 w-4" />
              Revolutionary Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Revolutionary Shopping Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the future of retail with our cutting-edge AI technology designed for modern consumers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto mb-4 p-4 bg-gradient-to-br ${feature.color} rounded-2xl w-fit shadow-lg`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 via-background to-primary/5">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Try Our Demo
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Experience the Future
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                <div className="text-6xl mb-6">🛍️</div>
                <h3 className="text-2xl font-bold mb-4">Online Shopping</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Browse our product catalog with AI-powered search and intelligent recommendations
                </p>
                <Link href="/shop">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
                <div className="text-6xl mb-6">📱</div>
                <h3 className="text-2xl font-bold mb-4">In-Store Experience</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Use your camera to identify products and get instant information
                </p>
                <Link href="/store">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                    Try Camera
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
                <div className="text-6xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold mb-4">AI Assistant</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Chat with our AI assistant for help with shopping decisions
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={() => {
                    // This will be handled by the Header component
                  }}
                >
                  Open Assistant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="h-4 w-4" />
              Ready to Experience the Future?
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join the Revolution
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of customers who are already enjoying our AI-powered shopping experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Shopping Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/store">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Try In-Store Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
