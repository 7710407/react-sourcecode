import { useEffect, useRef } from "react"

export const useObserver = (ref, canLoad, isLoading, callback) => { 
    const observer = useRef()

    useEffect(() => {
        if(isLoading) return // for not adding new Observer if it is true
        if (observer.current) observer.current.disconnect()
        let cb = (entries, observer) => {
          if (entries[0].isIntersecting && canLoad) { 
            callback()
          }
        }
        observer.current = new IntersectionObserver(cb)
        observer.current.observe(ref.current)
      }, [isLoading])
}