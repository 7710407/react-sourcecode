import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import NavBar from './UI/NavBar/NavBar'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => { 
    if (localStorage.getItem('login')) { 
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
    }}>

    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App