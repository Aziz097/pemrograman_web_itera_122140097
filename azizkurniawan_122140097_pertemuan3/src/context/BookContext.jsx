import React, { createContext, useContext, useReducer, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const BookContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]
    case 'EDIT':
      return state.map(b => (b.id === action.payload.id ? action.payload : b))
    case 'DELETE':
      return state.filter(b => b.id !== action.payload)
    default:
      return state
  }
}

export function BookProvider({ children }) {
  const [stored, setStored] = useLocalStorage('books', [])
  const [books, dispatch] = useReducer(reducer, stored)

  // sync to localStorage
  useEffect(() => {
    setStored(books)
  }, [books])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  )
}

export function useBooks() {
  const ctx = useContext(BookContext)
  if (!ctx) throw new Error('useBooks must be used within BookProvider')
  return ctx
}
