import { useState } from "react"
import Calculation from "./Calculation"
import "./Container.css"

export default function Container() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>useMemo</h1>
      <Calculation></Calculation>
      <button onClick={() => setCount(count + 1)}>Incr</button>
    </div>
  )
}
