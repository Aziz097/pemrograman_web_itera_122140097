import React, { useState, useMemo } from 'react'
import { useBooks } from '../context/BookContext'
import BookForm from '../components/BookForm'
import BookFilter from '../components/BookFilter'
import BookList from '../components/BookList'

export default function Home() {
  const { books, dispatch } = useBooks()
  const [filter, setFilter] = useState({ q: '', status: 'all' })
  const [editBook, setEditBook] = useState(null)

  const filtered = useMemo(() => {
    return books.filter(b => {
      const matchQ =
        b.title.toLowerCase().includes(filter.q.toLowerCase()) ||
        b.author.toLowerCase().includes(filter.q.toLowerCase())
      const matchStatus = filter.status === 'all' || b.status === filter.status
      return matchQ && matchStatus
    })
  }, [books, filter])

  return (
    <div className="space-y-4">
      <BookForm
        editBook={editBook}
        onFinish={() => setEditBook(null)}
      />
      <BookFilter onFilter={setFilter} />
      <BookList
        books={filtered}
        onEdit={b => setEditBook(b)}
        onDelete={id => dispatch({ type: 'DELETE', payload: id })}
      />
    </div>
  )
}
