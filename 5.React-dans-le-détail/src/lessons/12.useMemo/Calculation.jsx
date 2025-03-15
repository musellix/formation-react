import React, { useMemo, useState } from 'react'

export default function Calculation() {

    const [temperature, setTemperature] = useState(11)

    function celsiusToFarenheit(degree) {
        return degree * 1.8 + 32;
    }

    // on imagine que celsiusToFarenheit une un appel couteux
    // et on ne veut pas que le rappel se fasse à chaque fois

    // en utilisant useMemo, expensiveCalculation va etre memorisée
    // si le parent est modifié, on ne recalculera pas celsiusToFarenheit()
    // seulement si on change la valeur de temperature
    const expensiveCalculation = useMemo(() => {
        celsiusToFarenheit(temperature)
        console.log("RENDER")
    }, [temperature])

    return (
        <>
            <div>Calculation</div>
            <input 
                type="number"
                value={temperature}
                onChange={e => setTemperature(e.target.value)}
            ></input>
            <h1>Valeur de {temperature} en Farenheit : {expensiveCalculation}</h1>
        </>
    )
}
