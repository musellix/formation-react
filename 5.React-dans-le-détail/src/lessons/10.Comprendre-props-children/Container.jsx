import Child from "./Child"

export default function Container() {
  return (
    <div>
      <h1>Props children</h1>
      <Child txt="toto">
        <h1>Lorem</h1>
        <p>Toiti</p>
      </Child>
      <Child txt="toto">
        <button></button>
      </Child>
      <Child txt="toto">
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
      </Child>
    </div>
  )
}
