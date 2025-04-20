import { render, screen, fireEvent } from '@testing-library/react'
import BookFilter from '../components/BookFilter'

test('calls onFilter with correct values when clicking Cari', () => {
  const onFilter = vi.fn()
  render(<BookFilter onFilter={onFilter} />)

  // isi input pencarian
  const input = screen.getByPlaceholderText(/Cari judul \/ penulis/i)
  fireEvent.change(input, { target: { value: 'test buku' } })

  // pilih status
  const select = screen.getByRole('combobox')
  fireEvent.change(select, { target: { value: 'reading' } })

  // klik tombol Cari
  const button = screen.getByRole('button', { name: /cari/i })
  fireEvent.click(button)

  expect(onFilter).toHaveBeenCalledWith({ q: 'test buku', status: 'reading' })
})
