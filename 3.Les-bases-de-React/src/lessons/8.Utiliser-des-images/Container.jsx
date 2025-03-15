import fuji from "./assets/fuji.jpg"

export default function Container() {

  console.log(fuji)   // retourne l'url de l'image

  return (
    <div>
      <h1>Utiliser des images</h1>
      <img src={fuji} alt="Mont Fuji"></img>

      <p>Utiliser des images du dossier public</p>
      <img src="/assets/forest-1.jpg"></img>        {/* image dans le dossier public */}
      <img src={`/assets/forest-${id}.jpg`}></img>    {/* image dans le dossier public */}

      <p>SVG</p>
    </div>
  )
}
