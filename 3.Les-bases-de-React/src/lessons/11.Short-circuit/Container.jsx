export default function Container() {
const isLogged = false;

  return (
    <div>
      <h1>Bienvenue sur BooksParadise</h1>
      {isLogged && <button>Afficher</button>}
    </div>
  )
}
