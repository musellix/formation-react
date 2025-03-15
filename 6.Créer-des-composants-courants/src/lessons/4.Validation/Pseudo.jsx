import React from 'react'

export default function Pseudo({inputsStates, setInputsStates, showValidation}) {
  return (
    <>
        <label
            htmlFor='username'
            className='text-slate-50'
        >
            Votre pseudo (3-64 caracteres)
        </label>

        <input 
            id='username'
            type='text'
            className='rounded w-full p-1 mt-2'
            value={inputsStates.pseudo}
            onChange={e => setInputsStates({...inputsStates, pseudo: e.target.value})}
        />
        {showValidation && (
            <p className='text-red-400 font-semibold'>
                Votre pseudo doit contenir entre 3 et 64 caracteres
            </p>
        )}
    </>
  )
}
