import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useBooks } from '../context/BookContext'

const STATUS = ['owned', 'reading', 'wishlist']

export default function BookForm({ editBook, onFinish }) {
  const { dispatch } = useBooks()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [status, setStatus] = useState(STATUS[0])
  const [error, setError] = useState('')

  useEffect(() => {
    if (editBook) {
      setTitle(editBook.title)
      setAuthor(editBook.author)
      setStatus(editBook.status)
    }
  }, [editBook])

  const clear = () => {
    setTitle(''); setAuthor(''); setStatus(STATUS[0]); setError('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!title.trim() || !author.trim()) {
      setError('Judul dan Penulis harus diisi')
      return
    }
    const payload = {
      id: editBook?.id || Date.now(),
      title: title.trim(),
      author: author.trim(),
      status
    }
    dispatch({ type: editBook ? 'EDIT' : 'ADD', payload })
    clear()
    onFinish?.()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2 bg-gray-800 p-4 rounded-lg">
      {error && <p className="text-red-400">{error}</p>}
      <input
        className="w-full p-2 rounded bg-gray-700 focus:outline-accent-500"
        placeholder="Judul Buku"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        className="w-full p-2 rounded bg-gray-700 focus:outline-accent-500"
        placeholder="Penulis"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <select
        className="w-full p-2 rounded bg-gray-700 focus:outline-accent-500"
        value={status}
        onChange={e => setStatus(e.target.value)}
      >
        {STATUS.map(s => (
          <option value={s} key={s}>{s}</option>
        ))}
      </select>
      <button
        type="submit"
        className="w-full py-2 rounded bg-accent-500 hover:bg-opacity-90"
      >
        {editBook ? 'Simpan Perubahan' : 'Tambah Buku'}
      </button>
    </form>
  )
}

BookForm.propTypes = {
  editBook: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.oneOf(STATUS)
  }),
  onFinish: PropTypes.func
}
