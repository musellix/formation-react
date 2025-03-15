import React, { useContext } from 'react'
import "./Content.css"
import { ModeContext } from '../ModeProvider'

export default function Content() {

  // on recupere le context generique
  const { darkMode } = useContext(ModeContext)

  return (
    <div className='container'>
        <h1>You are in {darkMode ? "Dark" : "Light"} mode</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate sequi, veritatis, sapiente consequuntur officia, deleniti culpa eligendi soluta unde similique ab voluptatem! Nostrum veritatis quia repellendus id! Quae, corrupti at quo deleniti laborum cupiditate eaque impedit, dolorum sed mollitia aliquid aut obcaecati, illo ut! Soluta sapiente sunt illum placeat dolore, vero alias, perferendis saepe ab harum magni dolorum asperiores aliquam voluptatem reiciendis quisquam nulla earum quod modi aperiam exercitationem sit? Deserunt expedita ipsa aspernatur fugit quas. Fugiat officia veniam autem porro magnam provident quod doloremque eius voluptas odit. Iste, laudantium blanditiis ab maiores tempore architecto soluta ipsam perspiciatis eius?</p>
    </div>
  )
}
