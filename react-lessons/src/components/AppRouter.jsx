import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Posts from '../pages/Posts'
import About from '../pages/About'
import Home from '../pages/Home'
import PostIdPage from './PostIdPage'

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='*' element={<h1>404 Page Not Found </h1> } />
            <Route path='/' element={<Home /> } />
            <Route path='/home' element={<Home /> } />
            <Route path='/posts' element={<Posts /> } />
            <Route path='/posts/:id' element={<PostIdPage /> } />
            <Route path='/about' element={<About /> } />
        </Routes>
    </div>
  )
}

export default AppRouter