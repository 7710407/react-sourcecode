import React, { useContext } from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'
import { AuthContext } from '../context'

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const login = (evt) => { 
    evt.preventDefault()
    setIsAuth(true)
    localStorage.setItem('login', true)
  }

  return (
    <div>
      <div>Login </div>
      <form onSubmit={login}>
          <MyInput type='text' placeholder='login...' />
          <MyInput type='password' placeholder='password...' />
          <MyButton>Log in</MyButton>
      </form>
    </div>
  )
}

export default Login