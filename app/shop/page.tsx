'use client'

import React, { useState, useMemo } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Grid, List, SlidersHorizontal, Sparkles } from 'lucide-react'
import { sampleProducts, categories } from '@/lib/data'
import { useApp } from '@/lib/context'
import { motion } from 'framer-motion'

export default function ShopPage() {
  const { state } = useApp()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let products = sampleProducts

    if (searchQuery) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    if (selectedCategory !== 'All') {
      products = products.filter(product => product.category === selectedCategory)
    }

    products.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price
        case 'rating':
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return products
  }, [searchQuery, selectedCategory, sortBy])

  const speak = (text: string) => {
    if (!state.readAloud) return
    
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (state.readAloud && query) {
      speak(`Searching for ${query}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">AI-Powered Shopping</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Explore our curated collection with AI-powered recommendations and intelligent search
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 space-y-6"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search products, categories, or tags..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-12 h-12 text-lg border-2 border-blue-200 focus:border-blue-500 bg-white/80 backdrop-blur-sm transition-colors duration-200"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
                className="h-12 w-12 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Grid className="h-5 w-5" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
                className="h-12 w-12 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <List className="h-5 w-5" />
              </Button>
              <Button
                variant={showFilters ? 'default' : 'outline'}
                onClick={() => setShowFilters(!showFilters)}
                className="h-12 px-4 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pt-4 border-t border-blue-200">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`${selectedCategory === category 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'border-blue-200 text-blue-600 hover:bg-blue-50'
                    } transition-all duration-200`}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'rating')}
                  className="px-4 py-2 border border-blue-200 rounded-lg text-sm focus:border-blue-500 transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Results */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-lg text-gray-600">
              <span className="font-semibold text-gray-900">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
            {state.readAloud && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const summary = `Found ${filteredProducts.length} products. ${filteredProducts.slice(0, 3).map(p => p.name).join(', ')}`
                  speak(summary)
                }}
                className="flex items-center gap-2 border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                <Sparkles className="h-4 w-4" />
                Read Results
              </Button>
            )}
          </div>
        </motion.div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            layout
            className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
                : 'space-y-6'
            }
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-white/80 backdrop-blur-sm relative group/card hover:shadow-xl border-blue-200/50 w-full h-auto rounded-xl p-6 border shadow-sm hover:shadow-blue-200/20 transition-all duration-300">
                    <CardItem
                      translateZ="50"
                      className="w-full"
                    >
                      <ProductCard product={product} />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">No products found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
              Try adjusting your search terms or filters to find what you're looking for
            </p>
            <Button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* AI Assistant Integration */}
        {state.readAloud && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 right-6"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const summary = `Found ${filteredProducts.length} products. ${filteredProducts.slice(0, 3).map(p => p.name).join(', ')}`
                speak(summary)
              }}
              className="bg-white/80 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Read Results
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
