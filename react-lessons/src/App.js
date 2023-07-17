import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import Component1 from './components/Component1';
import Component2 from './components/Component2';


function App() {
  const [foo, setFoo]= useState("zoo")
  
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <Component1 />
      <Component2 />

      <button onClick={() => {
        setTimeout(() => {
          setFoo("foo" + "Arsen")
        }, 1000)}}>+</button>

      <button onClick={() => {
        setTimeout(() => {
          setFoo("zoo" + "Rafo")
        }, 2000)}}>-</button>

      <h4>{foo}</h4>
    </div>
  );
}

export default App;
