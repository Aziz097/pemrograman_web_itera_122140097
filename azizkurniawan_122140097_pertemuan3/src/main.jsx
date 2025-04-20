import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { BookProvider } from './context/BookContext'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BookProvider>
      <App />
    </BookProvider>
  </BrowserRouter>
)
