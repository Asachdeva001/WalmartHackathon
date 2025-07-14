'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { ThreeDMarquee } from '@/components/ui/3d-marquee'
import { FlipWords } from '@/components/ui/flip-words'
import { ShoppingCart, Camera, Bot, Volume2, Star, Zap, ArrowRight, Sparkles, Shield, Clock } from 'lucide-react'
import Link from 'next/link'
import { useApp } from '@/lib/context'
import { motion } from 'framer-motion'

export default function HomePage() {
  const { state } = useApp()
  const words = ["better", "smarter", "faster", "easier"];

  const productImages = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1520256862855-398228c41684?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1551107696-a4b57a59e92d?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1564466809058-bf4114613385?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
  ];

  const features = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Smart Shopping",
      description: "AI-powered product recommendations and intelligent search",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "In-Store Experience",
      description: "Use your camera to identify products and get instant information",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Assistant",
      description: "Voice-controlled shopping assistant available 24/7",
      color: "from-blue-700 to-blue-800"
    },
    {
      icon: <Volume2 className="h-8 w-8" />,
      title: "Accessibility",
      description: "Read aloud feature for enhanced accessibility",
      color: "from-blue-800 to-blue-900"
    }
  ]

  const stats = [
    { label: "Products", value: "500+", icon: <ShoppingCart className="h-5 w-5" /> },
    { label: "Happy Customers", value: "10K+", icon: <Star className="h-5 w-5" /> },
    { label: "AI Accuracy", value: "99.9%", icon: <Zap className="h-5 w-5" /> },
    { label: "Response Time", value: "<1s", icon: <Clock className="h-5 w-5" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Sparkles className="h-4 w-4" />
              AI-Powered Shopping Experience
            </div>
            <div className="text-6xl mb-4 animate-bounce">🛒</div>
            <div className="h-[20rem] flex justify-center items-center px-4">
              <div className="text-5xl mx-auto font-bold text-gray-900 dark:text-gray-900">
                Shopping made{" "}
                <FlipWords words={words} className="text-blue-600" />
                <br />
                with SmartMart
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              The future of shopping is here. Experience AI-powered e-commerce with 
              <span className="font-semibold text-blue-600"> in-store detection</span>, 
              <span className="font-semibold text-blue-600"> voice assistant</span>, and 
              <span className="font-semibold text-blue-600"> accessibility features</span>.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/shop">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/store">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
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
              <div key={index} className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-200/50 hover:border-blue-400/50 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex justify-center mb-3 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section with 3D Cards */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Zap className="h-4 w-4" />
              Revolutionary Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Revolutionary Shopping Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                <CardContainer className="inter-var">
                  <CardBody className="bg-white/80 backdrop-blur-sm relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-white/80 dark:border-blue-200/20 border-blue-200/50 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-gray-900 mb-4"
                    >
                      <div className={`mx-auto mb-4 p-4 bg-gradient-to-br ${feature.color} rounded-2xl w-fit shadow-lg`}>
                        <div className="text-white">
                          {feature.icon}
                        </div>
                      </div>
                    </CardItem>
                    <CardItem
                      as="h3"
                      translateZ="60"
                      className="text-xl font-bold text-gray-900 mb-2"
                    >
                      {feature.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-gray-600 text-sm max-w-sm mt-2"
                    >
                      {feature.description}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Marquee Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Featured Products
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Discover Amazing Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our vast collection of products with our innovative 3D showcase
            </p>
          </motion.div>
          
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 ring-1 ring-blue-200/50 shadow-lg">
              <ThreeDMarquee 
                images={productImages} 
                className="bg-gradient-to-br from-blue-50 to-blue-100/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section with 3D Cards */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Try Our Demo
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">
              Experience the Future
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                emoji: "🛍️",
                title: "Online Shopping",
                description: "Browse our product catalog with AI-powered search and intelligent recommendations",
                href: "/shop",
                buttonText: "Explore Products",
                bgClass: "from-blue-50 to-blue-100"
              },
              {
                emoji: "📱",
                title: "In-Store Experience",
                description: "Use your camera to identify products and get instant information",
                href: "/store",
                buttonText: "Try Camera",
                bgClass: "from-blue-100 to-blue-200"
              },
              {
                emoji: "🤖",
                title: "AI Assistant",
                description: "Chat with our AI assistant for help with shopping decisions",
                href: "#",
                buttonText: "Open Assistant",
                bgClass: "from-blue-200 to-blue-300"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardContainer className="inter-var">
                  <CardBody className={`bg-gradient-to-br ${item.bgClass} relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-blue-50 dark:border-blue-200/20 border-blue-200/50 w-auto sm:w-[30rem] h-auto rounded-xl p-8 border shadow-sm hover:shadow-lg transition-all duration-300`}>
                    <CardItem translateZ="50" className="text-6xl mb-6">
                      {item.emoji}
                    </CardItem>
                    <CardItem
                      as="h3"
                      translateZ="60"
                      className="text-2xl font-bold text-gray-900 mb-4"
                    >
                      {item.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-gray-600 mb-6 leading-relaxed"
                    >
                      {item.description}
                    </CardItem>
                    <CardItem translateZ="100">
                      <Link href={item.href}>
                        <Button className={`w-full bg-gradient-to-r from-blue-${600 + index * 100} to-blue-${700 + index * 100} hover:from-blue-${700 + index * 100} hover:to-blue-${800 + index * 100} text-white shadow-lg hover:shadow-xl transition-all duration-300`}>
                          {item.buttonText}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-200 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Shield className="h-4 w-4" />
              Ready to Experience the Future?
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Join the Revolution
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of customers who are already enjoying our AI-powered shopping experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Shopping Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/store">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
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
