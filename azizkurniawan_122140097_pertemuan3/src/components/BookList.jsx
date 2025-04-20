import React from 'react'
import PropTypes from 'prop-types'

export default function BookList({ books, onEdit, onDelete }) {
  if (books.length === 0) {
    return <p className="text-center text-gray-500">Buku tidak ditemukan.</p>
  }

  return (
    <ul className="space-y-2">
      {books.map(b => (
        <li
          key={b.id}
          className="flex justify-between items-center bg-gray-800 p-3 rounded"
        >
          <div>
            <h3 className="font-semibold">{b.title}</h3>
            <p className="text-sm text-gray-400">{b.author}</p>
            <span className="text-xs px-2 py-1 rounded bg-gray-700">{b.status}</span>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(b)}
              className="px-2 py-1 rounded border border-accent-500 hover:bg-accent-500/20"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(b.id)}
              className="px-2 py-1 rounded bg-red-600 hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.string
  })).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
