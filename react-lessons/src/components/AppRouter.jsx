import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Posts from '../pages/Posts'
import About from '../pages/About'
import Home from '../pages/Home'
import PostIdPage from './PostIdPage'
import Login from '../pages/Login'
import { AuthContext } from '../context'
import MyButton from '../UI/button/MyButton'

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  console.log(isAuth)
      
  return isAuth ? (
    <div>
        <Routes>
          <Route path='*' element={<h1>404 Page Not Found </h1> } />
          <Route path='/' element={<Home /> } />
          <Route path='/home' element={<Home /> } />
          <Route path='/posts' element={<Posts /> } />
          <Route path='/posts/:id' element={<PostIdPage /> } />
          <Route path='/about' element={<About /> } />
          <Route path='/login' element={<Login />} />

        </Routes>
    </div>
  ) : (
    <div>
        <Routes>
            <Route path='/' element={<Home /> } />
            <Route path='/home' element={<Home /> } />
            <Route path='/login' element={<Login /> } />
        </Routes>
    </div>
  )
}

export default AppRouter