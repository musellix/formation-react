import { useState } from "react"

export default function Container() {

  // useState retourne un table avec la valeur, 
  // et la methode pour modifier la valeur
  // le count demarre à 0
  const [count, setCount] = useState(0)

  // modifier la valeur du count
  setCount(count + 1)

  return (
    <div>
      <h1>Le state</h1>

    </div>
  )
}
