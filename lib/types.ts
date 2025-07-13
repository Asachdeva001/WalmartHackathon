export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  tags: string[]
  variants?: ProductVariant[]
  inStock: boolean
  rating: number
  reviewCount: number
}

export interface ProductVariant {
  id: string
  name: string
  price: number
  inStock: boolean
}

export interface CartItem {
  id: string
  productId: string
  product: Product
  quantity: number
  selectedVariant?: ProductVariant
}

export interface User {
  id: string
  email: string
  name: string
  isGuest: boolean
}

export interface StoreCode {
  code: string
  name: string
  location: string
}

export interface DetectedObject {
  id: string
  name: string
  confidence: number
  boundingBox: {
    x: number
    y: number
    width: number
    height: number
  }
}

export interface AIAssistantMessage {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
} 