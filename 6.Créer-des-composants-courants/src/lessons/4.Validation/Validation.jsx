import React, { useState } from 'react'
import Pseudo from './Pseudo'
import Password from './Password'
import PasswordConfirmation from './PasswordConfirmation'

export default function Validation() {
    const [inputsStates, setInputsStates] = useState({
        pseudo: "",
        password: "",
        passwordConfirmation: ""
    })
    const [showValidation, setShowValidation] = useState({
        pseudo: false,
        password: false,
        passwordConfirmation: false
    })

    console.log( inputsStates )

    function handleSubmit(e) {
        e.preventDefault()
        if(validationCheck()) {
            console.log("Envoi du formulaire !")
        }
    }

    function validationCheck() {
        const areValid = {
            pseudo: false,
            password: false,
            passwordConfirmation: false
        }

        // pseudo
        if(inputsStates.pseudo.length < 3 || inputsStates.pseudo.length > 64 ) {
            setShowValidation(state => ({...state, pseudo: true}))
        } else {
            areValid.pseudo = true
            setShowValidation(state => ({...state, pseudo: false}))
        }

        //  password
        console.log( inputsStates.password )
        if(inputsStates.password.length < 6 || !/\d/.test(inputsStates.password)) {
            setShowValidation(state => ({...state, password: true}))
        } else {
            areValid.password = true
            setShowValidation(state => ({...state, password: false}))
        }
        
        // confirmation password
        if(inputsStates.passwordConfirmation !== inputsStates.password ) {
            setShowValidation(state => ({...state, passwordConfirmation: true}))
        } else {
            areValid.passwordConfirmation = true
            setShowValidation(state => ({...state, passwordConfirmation: false}))
        }

        console.log(areValid)
        console.log(Object.values(areValid).every((value) => value))

        return Object.values(areValid).every((value) => value)
    }

  return (
    <form
        onSubmit={handleSubmit}
        className='max-w-xl mx-auto border p-10 rounded'
    >
        <p className='text-slate-100 text-xl mb-6'>
            Créer votre nom d'utilisateur et votre mot de passe
        </p>
        <Pseudo
            inputsStates={inputsStates}
            setInputsStates={setInputsStates}
            showValidation={showValidation.pseudo}
        ></Pseudo>
        <Password
            inputsStates={inputsStates}
            setInputsStates={setInputsStates}
            showValidation={showValidation.password}
        ></Password>
        <PasswordConfirmation
            inputsStates={inputsStates}
            setInputsStates={setInputsStates}
            showValidation={showValidation.passwordConfirmation}
        ></PasswordConfirmation>

        <button
            className='mt-10 bg-slate-100 px-4 py-2 min-w-[125px]'
        >
            Validation
        </button>
    </form>
  )
}
