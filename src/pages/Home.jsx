import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function Home() {
    let [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        console.log(searchParams.get('weight'));
        console.log(searchParams.get('price'));
        console.log(searchParams.get('age'));
    }, [])
    function handleSet() {
        setSearchParams(function (params) {
            params.set("color", "blue")
            return params
        })

    }
    return (
        <div>
            <button onClick={handleSet}>set</button>
        </div>
    )
}

export default Home