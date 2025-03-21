import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterResult() {
    const counter = useSelector(state => state.counter)
  return (
    <>
        <h1 
            className='text-slate-100 text-3xl'
        >
            Counter value : {counter.value}
        </h1>
    </>
  )
}
