import { useEffect, useState } from "react"
import "./Container.css"

export default function Container() {
  const [count, setCount] = useState(0)
  
  useEffect( () => {
    console.log( "apres premiere creation et apres mise à jour du DOM")
  }, [count])

  console.log(count)

  return (
    <div>
      <h1>Le hook useEffect</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
