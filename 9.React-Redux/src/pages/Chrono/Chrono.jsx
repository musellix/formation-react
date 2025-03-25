import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset, startChrono } from '../../features/chrono';

export default function Chrono() {
    const dispatch = useDispatch();
    const chrono = useSelector(state => state.chrono)

  return (
    <div>
        <p className='text-2xl text-slate-100 mb-2'>
            Valeur du chrono : {chrono.valeur}
        </p>
        <button
        onClick={() => dispatch(startChrono())}
            className='p-2 min-w-[125px] bg-slate-100 rounded'
        >Demarrer</button>
        <button
        onClick={() => dispatch(reset())}
            className='p-2 min-w-[125px] bg-slate-100 rounded ml-3'
        >Reset</button>
    </div>
  )
}
