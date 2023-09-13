// import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './reducers/ActionCreators'
import { userSlice } from './reducers/UserSlice'
import { RootState } from './store/store'

function App() {
  const dispatch = useAppDispatch()
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  )
  
  useEffect(() => { 
    dispatch(fetchUsers())
  }, [])

  return <>
    {isLoading && <h1>loading...</h1>}
    {error && <h1>{error}</h1>}
    {JSON.stringify(users, null, 2)}
  </>
  
}

export default App
