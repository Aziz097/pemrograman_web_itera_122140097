import React from 'react'
import { useBooks } from '../context/BookContext'
import useBookStats from '../hooks/useBookStats'

export default function Stats() {
  const { books } = useBooks()
  const { total, owned, reading, wishlist } = useBookStats(books)

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: 'Total', value: total },
        { label: 'Owned', value: owned },
        { label: 'Reading', value: reading },
        { label: 'Wishlist', value: wishlist }
      ].map(stat => (
        <div key={stat.label} className="bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">{stat.value}</p>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
