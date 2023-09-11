// import { useSelector } from 'react-redux'
import './App.css'
import { usesAppSelector } from './hooks/redux'

function App() {
  const {} = usesAppSelector(state => state.userReducer)
  return (
    <>
    </>
  )
}

export default App
