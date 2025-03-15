import React from 'react'

export default function PasswordConfirmation({inputsStates, setInputsStates, showValidation}) {
  return (
    <>
        <label
            htmlFor='confirmation'
            className='text-slate-50 inline-block mt-5'
        >
            Confirmer votre mot de passe
        </label>

        <input 
            id='confirmation'
            type='password'
            className='rounded w-full p-1 mt-2'
            value={inputsStates.passwordConfirmation}
            onChange={e => setInputsStates({...inputsStates, passwordConfirmation: e.target.value})}
        />
                {showValidation && (
            <p className='text-red-400 font-semibold'>
                Votre confirmation de password doit etre identique au password
            </p>
        )}
    </>
  )
}
