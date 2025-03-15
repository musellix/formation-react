import { useEffect, useState } from "react"

export default function Container() {
  const [count, setCount] = useState(0)
  const [toto, setToto] = useState(0)
  const [tata, setTata] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(currentCount => currentCount + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <h1>Valeur du compteur : {count}</h1>
    </div>
  )
}
