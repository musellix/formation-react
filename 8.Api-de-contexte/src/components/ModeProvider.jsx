import {createContext, useState } from 'react'

// 1. on cree le context
export const ModeContext = createContext()

// 2. on cree un composant d'ordre superieur
export default function ModeProvider(props) {
    const [darkMode, setDarkMode] = useState(false);

    function toggleMode() {
        setDarkMode(!darkMode);
    }

    if(darkMode) document.body.classList.add("dark")
    else document.body.classList.remove("dark")

    return (
        <ModeContext.Provider value={{toggleMode, darkMode}}>

            {/* on va entourer App avec ModeProvider d'où le props.children */}
            {props.children}
        </ModeContext.Provider>
    )
}