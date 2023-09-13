// import { useSelector } from 'react-redux'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { userSlice } from './reducers/UserSlice'
import { RootState } from './store/store'

function App() {
  const { count } = useAppSelector((state) => state.userReducer)
  const { increment } = userSlice.actions;
  const { decrement } = userSlice.actions;
  const dispatch = useAppDispatch()

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(10))}>Increment</button>
      <button onClick={() => dispatch(decrement(10))}>Decrement</button>
    </>
  )
}

export default App
