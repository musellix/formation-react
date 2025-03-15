import "./Container.css"
import { useState } from "react"

export default function Container() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Toggle une classe</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita inventore in blanditiis vel iste! Iure, reprehenderit tempora. Beatae laboriosam, ad eum nesciunt ipsam porro error, officiis ea id, voluptate ratione.</p>
    
      <button
        onClick={() => setDarkMode(!darkMode)}
      >
      Activer le {darkMode ? 'light mode' : 'dark mode'}
      </button>
    </div>
  )
}
