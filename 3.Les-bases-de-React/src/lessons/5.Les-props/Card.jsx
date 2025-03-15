import React from 'react'

export default function Card({id, changeState:changeParentState}) {
  console.log(id)
  return (
    <div>
        <p>Card {id}</p>
        <button onClick={()=>changeParentState("Bonjour")}>Changer le state</button>
    </div>
  )
}
