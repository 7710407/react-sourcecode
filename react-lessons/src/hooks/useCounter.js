import { useState } from "react"

export const useCounter = (initialState) => { 
    const [count, setCount] = useState()
        
    function increment() { 
        return setCount(count + 1)
    }
    
    function decrement() { 
        return setCount(count - 1)
    }

    return [initialState, increment, decrement];
}

