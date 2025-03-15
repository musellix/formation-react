export default function StaticRefSelection() {

    const inputsRef = useRef([])
  
    function addInputRef(elt) {
      if(el && !inputsRef.current.includes(el)) {
        inputsRef.current.push(el)
      }
      console.log(inputsRef)
    }
  
    return (
      <>
        <h1>Sélectionner un tableau d'éléments</h1>
        <input ref={addInputRef} type="text"></input>
        <input ref={addInputRef} type="text"></input>
        <input ref={addInputRef} type="text"></input>
      </>
    )
  }
  