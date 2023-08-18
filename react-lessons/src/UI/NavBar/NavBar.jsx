
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'
import MyButton from '../button/MyButton'

const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const logOut = () => { 
    setIsAuth(false)
    localStorage.removeItem('login')
  }


  return (
      <div>
        <div className='navbar'>
          <MyButton onClick={logOut}>Log Out</MyButton>
          <div className='navbar_links'>
              <Link to='/home'>Home</Link>
              <Link to='/posts'>Posts</Link>
              <Link to='/about'>About</Link>
              <Link to='/login'>Login</Link>
          </div>
        </div>
      </div>
  )
}

export default NavBar