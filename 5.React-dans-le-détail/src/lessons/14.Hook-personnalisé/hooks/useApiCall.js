import React, { useEffect, useState } from 'react'

export default function useApiCall() {
    const [catData, setCatData] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => {
            if(!response.ok) {
                throw new Error()
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
            setCatData(data)
            setLoading(false)
            setError(false)
        })
        .catch(() => setError(true))
    }, [])

    return { catData, error, loading }
}
