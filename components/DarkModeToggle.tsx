// components/DarkModeToggle.tsx
'use client'

import { useEffect, useState } from 'react'

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      root.classList.add('dark')
      setIsDark(true)
    } else {
      root.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    if (isDark) {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md border text-sm shadow-md bg-white dark:bg-gray-800"
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
