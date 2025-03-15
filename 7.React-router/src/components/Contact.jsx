import React from 'react'
import { useLocation } from 'react-router'

export default function Contact() {
  const data = useLocation()
  console.log(data.state.txt)

  return (
    <div>Contact us : {data.state.txt}</div>
  )
}
