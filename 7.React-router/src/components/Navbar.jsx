import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="p-2 text-center bg-slate-300">
        <Link 
            to="/" 
            className="mx-2 text-md text-semibold"
        >Home</Link>
        <Link 
            to="/analytics" 
            className="mx-2 text-md text-semibold"
        >Analytics</Link>
        <Link 
            state={{txt: "Toto"}}
            to="/contact" 
            className="mx-2 text-md text-semibold"
        >Contact</Link>
    </nav>
  )
}
