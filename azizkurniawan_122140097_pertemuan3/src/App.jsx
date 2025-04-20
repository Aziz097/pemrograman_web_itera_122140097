import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Stats from './pages/Stats'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 p-4 flex space-x-4">
        <NavLink to="/" end className="hover:text-accent-500">
          Home
        </NavLink>
        <NavLink to="/stats" className="hover:text-accent-500">
          Stats
        </NavLink>
      </nav>

      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
