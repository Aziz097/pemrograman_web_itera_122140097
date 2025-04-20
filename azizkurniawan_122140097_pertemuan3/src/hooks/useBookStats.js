import { useMemo } from 'react'

export default function useBookStats(books) {
  return useMemo(() => {
    const stats = { total: books.length, owned: 0, reading: 0, wishlist: 0 }
    books.forEach(book => {
      stats[book.status] = (stats[book.status] || 0) + 1
    })
    return stats
  }, [books])
}
