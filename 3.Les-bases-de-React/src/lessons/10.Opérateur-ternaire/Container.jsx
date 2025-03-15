import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [validation, setValidation] = useState(false);

  return (
    <div>
      <h1>Opération ternaire</h1>
      <form>
        <input onClick={() => setValidation(!validation)} type="checkbox"></input>
        <p
          style={{color: `${validation ? "loghtgreen" : "red"}`}}>
            {validation ? "Bravo" : "Cocher la case"}
          </p>
      </form>
    </div>
  )
}
