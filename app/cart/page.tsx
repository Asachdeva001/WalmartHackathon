'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Trash2, Minus, Plus, ShoppingCart, Volume2 } from 'lucide-react'
import { useApp } from '@/lib/context'
import { formatPrice } from '@/lib/utils'

export default function CartPage() {
  const { state, dispatch } = useApp()

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = state.cart.reduce((sum, item) => {
    const price = item.selectedVariant?.price || item.product.price
    return sum + (price * item.quantity)
  }, 0)
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + tax

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: itemId })
    } else {
      dispatch({ type: 'UPDATE_CART_ITEM', payload: { id: itemId, quantity: newQuantity } })
    }
  }

  const removeItem = (itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const speak = (text: string) => {
    if (!state.readAloud) return
    
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
  }

  const handleCheckout = () => {
    speak(`Proceeding to checkout. Total amount: ${formatPrice(total)}`)
    // In a real app, this would redirect to a checkout page
    alert('Checkout functionality would be implemented here!')
  }

  const readCartSummary = () => {
    const summary = `Cart contains ${totalItems} items. Total: ${formatPrice(total)}`
    speak(summary)
  }

  if (state.cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Start shopping to add items to your cart
          </p>
          <Button asChild>
            <a href="/shop">Start Shopping</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            {state.readAloud && (
              <Button variant="outline" size="sm" onClick={readCartSummary}>
                <Volume2 className="h-4 w-4 mr-2" />
                Read Summary
              </Button>
            )}
          </div>

          <div className="space-y-4">
            {state.cart.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-2xl">🛒</div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.product.name}</h3>
                      {item.selectedVariant && (
                        <p className="text-sm text-muted-foreground">
                          {item.selectedVariant.name}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {formatPrice(item.selectedVariant?.price || item.product.price)} each
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold">
                        {formatPrice((item.selectedVariant?.price || item.product.price) * item.quantity)}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6">
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleCheckout}
                className="w-full"
                size="lg"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Proceed to Checkout
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>Free shipping on orders over $50</p>
                <p>30-day return policy</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 