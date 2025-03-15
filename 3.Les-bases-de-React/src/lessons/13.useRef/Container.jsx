import { useRef, useState } from "react"

// 1. Isoler une valeur parmi les mises à jour

export default function Container() {
  const [state, setState] = useState(0);
  const countRef = useRef(0)      // {current: 0}

  function handleCountRef() {
    countRef.current++
    console.log(countRef.current)
  }
  console.log("Mise à jour")

  return (
    <div>
      <h1>Comprendre les refs</h1>
      <p>Valeur du state {state}</p>
      <p>Valeur de la ref {countRef.current}</p>
      <button onClick={handleCountRef}>Incrementer la ref</button>
      <button onClick={() => setState(state+1)}>Incrementer le state</button>
    </div>
  )
}
