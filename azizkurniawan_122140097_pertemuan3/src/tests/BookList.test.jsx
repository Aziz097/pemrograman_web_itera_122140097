import { render, screen } from '@testing-library/react'
import BookList from '../components/BookList'

test('shows no-books message', () => {
  render(<BookList books={[]} onEdit={() => {}} onDelete={() => {}} />)
  expect(screen.getByText(/Buku tidak ditemukan/i)).toBeInTheDocument()
})
