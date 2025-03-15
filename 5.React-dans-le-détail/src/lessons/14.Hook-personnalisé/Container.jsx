import useApiCall from "./hooks/useApiCall"
import spinner from './spinner.svg'

export default function Container() {
  const {catData, error, loading} = useApiCall()
  console.log(catData)


  return (
    <div>
      <h1>Photo de chats 🐾</h1>
      {(loading && !error) && <img src={spinner}></img>}

      {error && <p>Une erreur est survenue</p>}

      {catData && <img src={catData[0].url}></img>}
    </div>
  )
}
