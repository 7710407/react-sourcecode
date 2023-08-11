import { useState } from "react"

const useCounter = (initialState) => { 
    const [counter1, setCount] = useState(initialState)
    const increment = () => setCount(counter1 + 1)
    const decrement =  () => setCount(counter1 - 1)

    return { increment, counter1, decrement };
}

export default useCounter