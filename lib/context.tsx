  'use client'

  import React, { createContext, useContext, useReducer, useEffect } from 'react'
  import { CartItem, User, Product } from './types'
  import { sampleUsers } from './data'

  interface AppState {
    user: User | null
    cart: CartItem[]
    readAloud: boolean
    darkMode: boolean
    aiAssistantOpen: boolean
  }

  type AppAction =
    | { type: 'SET_USER'; payload: User | null }
    | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number; variant?: any } }
    | { type: 'REMOVE_FROM_CART'; payload: string }
    | { type: 'UPDATE_CART_ITEM'; payload: { id: string; quantity: number } }
    | { type: 'CLEAR_CART' }
    | { type: 'TOGGLE_READ_ALOUD' }
    | { type: 'TOGGLE_DARK_MODE' }
    | { type: 'SET_DARK_MODE'; payload: boolean }
    | { type: 'TOGGLE_AI_ASSISTANT' }

  const initialState: AppState = {
    user: null,
    cart: [],
    readAloud: false,
    darkMode: false,
    aiAssistantOpen: false,
  }

  function appReducer(state: AppState, action: AppAction): AppState {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload }

      case 'ADD_TO_CART': {
        const { product, quantity, variant } = action.payload
        const existingItem = state.cart.find(item =>
          item.productId === product.id &&
          (!variant || item.selectedVariant?.id === variant.id)
        )
        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === existingItem.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          }
        } else {
          const newItem: CartItem = {
            id: Math.random().toString(36).substr(2, 9),
            productId: product.id,
            product,
            quantity,
            selectedVariant: variant
          }
          return { ...state, cart: [...state.cart, newItem] }
        }
      }

      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload)
        }

      case 'UPDATE_CART_ITEM':
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
        }

      case 'CLEAR_CART':
        return { ...state, cart: [] }

      case 'TOGGLE_READ_ALOUD':
        return { ...state, readAloud: !state.readAloud }

      case 'TOGGLE_DARK_MODE':
        return { ...state, darkMode: !state.darkMode }

      case 'SET_DARK_MODE':
        return { ...state, darkMode: action.payload }

      case 'TOGGLE_AI_ASSISTANT':
        return { ...state, aiAssistantOpen: !state.aiAssistantOpen }

      default:
        return state
    }
  }

  interface AppContextType {
    state: AppState
    dispatch: React.Dispatch<AppAction>
  }

  const AppContext = createContext<AppContextType | undefined>(undefined)

  export function AppProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(appReducer, initialState)

    useEffect(() => {
      const savedUser = localStorage.getItem('user')
      if (savedUser) {
        dispatch({ type: 'SET_USER', payload: JSON.parse(savedUser) })
      } else {
        dispatch({ type: 'SET_USER', payload: sampleUsers[1] })
      }
    }, [])

    useEffect(() => {
      const savedDarkMode = localStorage.getItem('darkMode')
      if (savedDarkMode !== null) {
        dispatch({ type: 'SET_DARK_MODE', payload: savedDarkMode === 'true' })
      }
    }, [])

    useEffect(() => {
      if (state.user) {
        localStorage.setItem('user', JSON.stringify(state.user))
      }
    }, [state.user])

    useEffect(() => {
      if (state.darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('darkMode', state.darkMode ? 'true' : 'false')
    }, [state.darkMode])

    return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    )
  }

  export function useApp() {
    const context = useContext(AppContext)
    if (!context) {
      throw new Error('useApp must be used within an AppProvider')
    }
    return context
  }
