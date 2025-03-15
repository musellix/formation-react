import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <p>Page not found 🤖</p>
    
        <div className='text-center'>
            {/* en cliquant sur un a href, on provoque un refresh du navigateur */}
            <a href="/">Back to Home page</a>

            {/* Avec Link, ne provoque pas de rechargement */}
            <Link to="/">
                Back to Home page
            </Link>
        </div>
    </div>
  )
}
