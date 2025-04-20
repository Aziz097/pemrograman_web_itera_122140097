import { render, screen } from '@testing-library/react'
import Stats from '../pages/Stats'
import { BookProvider } from '../context/BookContext'

test('renders Stats cards', () => {
  render(
    <BookProvider>
      <Stats />
    </BookProvider>
  )
  expect(screen.getByText(/Total/i)).toBeInTheDocument()
  expect(screen.getByText(/Owned/i)).toBeInTheDocument()
})
