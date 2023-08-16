import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import NavBar from './UI/NavBar/NavBar'
import AppRouter from './components/AppRouter'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App