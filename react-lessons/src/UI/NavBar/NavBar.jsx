
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div>
        <div className='navbar'>
            <div className='navbar_links'>
                <Link to='/home'>Home</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar