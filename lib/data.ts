import { Product, User, StoreCode } from './types'

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Bananas',
    description: 'Fresh organic bananas from local farms. Perfect for smoothies, baking, or a healthy snack.',
    price: 2.99,
    originalPrice: 3.49,
    image: '/images/bananas.jpg',
    category: 'Fruits',
    tags: ['organic', 'fresh', 'healthy'],
    variants: [
      { id: '1-1', name: 'Small Bunch (6-8 bananas)', price: 2.99, inStock: true },
      { id: '1-2', name: 'Large Bunch (10-12 bananas)', price: 4.49, inStock: true },
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 128
  },
  {
    id: '2',
    name: 'Whole Grain Bread',
    description: 'Freshly baked whole grain bread with seeds and nuts. High in fiber and protein.',
    price: 4.99,
    image: '/images/bread.jpg',
    category: 'Bakery',
    tags: ['whole grain', 'fresh', 'healthy'],
    variants: [
      { id: '2-1', name: 'Regular Loaf', price: 4.99, inStock: true },
      { id: '2-2', name: 'Large Loaf', price: 6.99, inStock: true },
    ],
    inStock: true,
    rating: 4.3,
    reviewCount: 89
  },
  {
    id: '3',
    name: 'Greek Yogurt',
    description: 'Creamy Greek yogurt with live cultures. High in protein and perfect for breakfast or snacks.',
    price: 5.49,
    image: '/images/yogurt.jpg',
    category: 'Dairy',
    tags: ['protein', 'probiotic', 'healthy'],
    variants: [
      { id: '3-1', name: 'Plain (32oz)', price: 5.49, inStock: true },
      { id: '3-2', name: 'Vanilla (32oz)', price: 5.99, inStock: true },
      { id: '3-3', name: 'Strawberry (32oz)', price: 5.99, inStock: false },
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: '4',
    name: 'Chicken Breast',
    description: 'Fresh boneless, skinless chicken breast. Perfect for grilling, baking, or stir-frying.',
    price: 12.99,
    originalPrice: 15.99,
    image: '/images/chicken.jpg',
    category: 'Meat',
    tags: ['protein', 'fresh', 'lean'],
    variants: [
      { id: '4-1', name: '1 lb Package', price: 12.99, inStock: true },
      { id: '4-2', name: '2 lb Package', price: 23.99, inStock: true },
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 203
  },
  {
    id: '5',
    name: 'Avocados',
    description: 'Ripe Hass avocados. Perfect for guacamole, salads, or toast.',
    price: 3.99,
    image: '/images/avocados.jpg',
    category: 'Fruits',
    tags: ['fresh', 'healthy', 'organic'],
    variants: [
      { id: '5-1', name: 'Small (3 count)', price: 3.99, inStock: true },
      { id: '5-2', name: 'Large (4 count)', price: 5.49, inStock: true },
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 94
  }
]

export const sampleUsers: User[] = [
  {
    id: '1',
    email: 'demo@example.com',
    name: 'Demo User',
    isGuest: false
  },
  {
    id: '2',
    email: 'guest@example.com',
    name: 'Guest User',
    isGuest: true
  }
]

export const sampleStoreCodes: StoreCode[] = [
  {
    code: '1234',
    name: 'Downtown Store',
    location: '123 Main St, Downtown'
  },
  {
    code: '5678',
    name: 'Mall Location',
    location: '456 Shopping Center Dr'
  }
]

export const categories = [
  'All',
  'Fruits',
  'Vegetables',
  'Dairy',
  'Meat',
  'Bakery',
  'Pantry',
  'Beverages'
] 