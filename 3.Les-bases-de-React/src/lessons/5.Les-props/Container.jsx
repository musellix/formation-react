import { useState } from "react"
import Card from "./Card"

export default function Container() {
  
  const [state, setState] = useState("Hello World")

  return (
    <div>
      <h1>Les props</h1>
      <p>state du container : {state}</p>
      <Card id="11" changeState={setState}></Card>
      {/* { Card({id: 11}) } */}
    </div>
  )
}
