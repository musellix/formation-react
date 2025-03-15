import React, { useContext } from 'react'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import "./ToggleModeButton.css"
import { ModeContext } from '../ModeProvider'

export default function ToggleModeButton() {
  const {toggleMode, darkMode} = useContext(ModeContext)

  return (
    <button
        className='toggle-theme-btn'
        onClick={toggleMode}
    >
        <span>Go {darkMode ? "Light" : "Dark"}</span>
        <img src={darkMode ? sun : moon} alt="toggle icon" />
    </button>
  )
}
