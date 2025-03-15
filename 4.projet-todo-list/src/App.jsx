import { useRef, useState } from 'react'

function App() {
  const [listeTaches, setListeTaches] = useState([])
  const [messageErreur, setMessageErreur] = useState('');

  const newTacheRef = useRef()

  function ajouterTache(event) {
    event.preventDefault()    // pour eviter de rafraichir la page
    console.log(newTacheRef.current.value)
    const value = newTacheRef.current.value;

    if( value === '' ) {
      setMessageErreur('Ajouter du contenu à votre tache')
    } else {
      setListeTaches([...listeTaches, value])
      newTacheRef.current.value = ''
    }
  }

  function supprimerTache(id) {
    const listeTmp = [...listeTaches]
    listeTmp.splice(id, 1)
    setListeTaches( listeTmp )
  }

  return (
    <div className='h-screen bg-slate-900'>
      <div className='max-w-4xl mx-auto pt-20 px-6'>
        <h1 className='text-3xl text-slate-100 mb-4'>La todo liste</h1>
        
        <form onSubmit={ajouterTache} className='mb-10'>
          <label htmlFor='todo-item'
            className='text-slate-50'>Ajouter une chose à faire</label>
          <input
            ref={newTacheRef}
            type='text'
            id="todo-item"
            className='mt-1 bg-gray-200 block w-full rounded'></input>
          <p
            className='text-red-500'
          >{messageErreur}</p>

          <button 
            type='submit'
            className='mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]'
            >Ajouter</button>
        </form>

        <ul>
          {listeTaches.map((uneTache, id) => (
            <li className="text-gray-100" key={id}>
              {uneTache}  
              <button onClick={() => supprimerTache(id)}>  X  </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
