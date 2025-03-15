import { useCallback, useState } from "react"
import Card from "./Card"

export default function Container() {
  const [count, setCount] = useState(0)

  const customLog = useCallback(() => console.log("Bonjour"), [])
  // function customLog() {
  //   console.log("Bonjour")
  // }

  return (
    <div>
      <h1>Memo et useCallback</h1>
      <Card txt="toto" customLog={customLog}></Card>
      <button onClick={() => setCount(count + 1)}>Incr</button>
    </div>
  )
}
