import './Container.css'
import style from "./Container.module.css"

export default function Container() {

  return (
    <div>
      <h1 className="title">CSS Modules</h1>
      <h1 className={style.title}>CSS Modules</h1>
    </div>
  )
}
