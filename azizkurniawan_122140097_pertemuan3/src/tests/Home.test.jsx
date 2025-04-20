import { render, screen } from '@testing-library/react'
import Home from '../pages/Home'
import { BookProvider } from '../context/BookContext'

test('renders Home with initial state', () => {
  render(
    <BookProvider>
      <Home />
    </BookProvider>
  )
  expect(screen.getByText(/Tambah Buku/i)).toBeInTheDocument()
})
