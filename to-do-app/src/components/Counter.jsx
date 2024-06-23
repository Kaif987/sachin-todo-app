import { useState } from "react"
import React from 'react'

export default function Counter() {
    const [count, setCount] = useState(100)

    const increment = () => {
        setCount(arg => arg + 2)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>Count value: {count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
