import { useReducer } from "react"

export default function Container() {

  // count comme le state, et demarre à 0
  // dispatch est un utilitaire permettant d'envoyer des actions au reducer
  const [count, dispatch] = useReducer(reducer, 0)

  function reducer(state, action) {
    switch(action.type) {
      case "increment":
        return state + action.payload
      case "decrement":
        return state - action.payload
    }
  }

  return <div>
    <h1>Valeur du compteur : {count}</h1>
    <button
      onClick={() => dispatch({type: "increment", payload: 5})}>Incrementer
    </button>
    <button
      onClick={() => dispatch({type: "decrement", payload: 4})}>Decrementer
    </button>
  </div>
}
