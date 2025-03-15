export default function Container() {

  const data = [
    {
      id: 1,
      name: "Alice"
    }, {
      id: 2,
      name: "Elliott"
    }, {
      id: 3,
      name: "Bene"
    }
  ]

  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}