import React, { useEffect, useState } from 'react'
import "./Card.css"

export default function Card() {
    const [state, setState] = useState(0)

    useEffect(() => {
        console.log("use effect")
        return () => console.log("Fonction de nettoyage")
    })

  return (
    <div className='card'>
        <p>voici la card et son state {state}</p>
        <button onClick={() => setState(state + 1)}>Incrementation</button>
    </div>
  )
}
