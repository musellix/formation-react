import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
    const params = useParams();
    console.log(params)

  return (
    <div>Your profile : {params.id}</div>
  )
}
