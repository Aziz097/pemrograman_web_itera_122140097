// src/components/BookFilter/BookFilter.jsx
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function BookFilter({ onFilter }) {
  const [q, setQ] = useState('')
  const [status, setStatus] = useState('all')

  const handleSubmit = e => {
    e.preventDefault()
    onFilter({ q: q.trim(), status })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex space-x-2 mb-4"
    >
      <input
        type="text"
        className="flex-1 p-2 rounded bg-gray-800 focus:outline-accent-500"
        placeholder="Cari judul / penulis..."
        value={q}
        onChange={e => setQ(e.target.value)}
      />

      <select
        className="p-2 rounded bg-gray-800 focus:outline-accent-500"
        value={status}
        onChange={e => setStatus(e.target.value)}
      >
        <option value="all">All</option>
        <option value="owned">Owned</option>
        <option value="reading">Reading</option>
        <option value="wishlist">Wishlist</option>
      </select>

      <button
        type="submit"
        className="px-4 py-2 rounded bg-accent-500 hover:bg-opacity-90"
      >
        Cari
      </button>
    </form>
  )
}

BookFilter.propTypes = {
  onFilter: PropTypes.func.isRequired
}
