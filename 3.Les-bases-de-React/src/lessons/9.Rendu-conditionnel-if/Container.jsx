export default function Container() {

  const isLogged = true;

  if(isLogged) {
    content = "Vous etes connecté"
  }
  else {
    content = "Vous n'etes pas connecté"
  }

  return <div>
      <h1>{content}</h1>
    </div>
}
