import React, { memo } from 'react'

export default memo(function Card({txt, customLog}) {
    console.log("RENDER !")
    customLog()

  return (
    <div>
        <p>Carte</p>
        <p>{txt}</p>
    </div>
  )
})
