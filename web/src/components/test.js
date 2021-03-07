import React, { useState } from 'react'

const Test = () => {
    const [state, setState] = useState(0)

    function increment() {
        setState(prevState => prevState + 1)
    }

    function decrement() {
        setState(prevState => prevState - 1)
    }

    return (
        <>
        <button onClick={decrement}>-</button>
        <span>{state}</span>
        <button onClick={increment}>+</button>
        </>
    )
}

export default Test
