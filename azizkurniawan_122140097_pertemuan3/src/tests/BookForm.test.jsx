import { render, screen, fireEvent } from '@testing-library/react'
import BookForm from '../components/BookForm'
import { BookProvider } from '../context/BookContext'

test('renders BookForm and adds a book', () => {
  render(
    <BookProvider>
      <BookForm onFinish={() => {}} />
    </BookProvider>
  )

  fireEvent.change(screen.getByPlaceholderText(/Judul Buku/i), {
    target: { value: 'Buku A' }
  })
  fireEvent.change(screen.getByPlaceholderText(/Penulis/i), {
    target: { value: 'Author A' }
  })
  fireEvent.click(screen.getByText(/Tambah Buku/i))

  expect(screen.getByPlaceholderText(/Judul Buku/i).value).toBe('')
})
