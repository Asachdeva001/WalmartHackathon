'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, ShoppingCart, Volume2, Heart, Eye, Plus, Minus } from 'lucide-react'
import { Product } from '@/lib/types'
import { formatPrice } from '@/lib/utils'
import { useApp } from '@/lib/context'
import { motion } from 'framer-motion'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { state, dispatch } = useApp()
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0])
  const [quantity, setQuantity] = useState(1)
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product,
        quantity,
        variant: selectedVariant
      }
    })
  }

  const speak = (text: string) => {
    if (!state.readAloud) return
    
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
  }

  const handleCardClick = () => {
    if (state.readAloud) {
      const description = `${product.name}. ${product.description}. Price: ${formatPrice(product.price)}`
      speak(description)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card 
        className="cursor-pointer transition-all duration-300 hover:shadow-xl border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden group"
        onClick={handleCardClick}
      >
        <CardHeader className="pb-4">
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <motion.div 
                className="text-6xl"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                🛒
              </motion.div>
            </div>
            
            {/* Badges */}
            <div className="absolute top-2 left-2 flex gap-2">
              {product.originalPrice && (
                <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                  SALE
                </span>
              )}
              {!product.inStock && (
                <span className="px-2 py-1 bg-gray-500 text-white text-xs font-bold rounded-full">
                  OUT OF STOCK
                </span>
              )}
            </div>
            
            {/* Action buttons */}
            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button variant="ghost" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {product.name}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({product.reviewCount})
              </span>
            </div>
            {product.originalPrice && (
              <span className="text-sm line-through text-muted-foreground">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">
                {formatPrice(selectedVariant?.price || product.price)}
              </span>
              {state.readAloud && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Volume2 className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              )}
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {product.variants && product.variants.length > 1 && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Options:</label>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <Button
                    key={variant.id}
                    variant={selectedVariant?.id === variant.id ? "default" : "outline"}
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedVariant(variant)
                    }}
                    disabled={!variant.inStock}
                    className="text-xs"
                  >
                    {variant.name}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  setQuantity(Math.max(1, quantity - 1))
                }}
                className="h-8 w-8 p-0 hover:bg-muted"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  setQuantity(quantity + 1)
                }}
                className="h-8 w-8 p-0 hover:bg-muted"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            
            <Button
              onClick={(e) => {
                e.stopPropagation()
                handleAddToCart()
              }}
              disabled={!product.inStock}
              className="flex-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>

          {!product.inStock && (
            <p className="text-sm text-red-500 font-medium text-center">
              Out of Stock
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
} 