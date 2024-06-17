import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10)
  const addValue = () =>{
    if(counter<20){
      counter = counter+1
      setCounter(counter)
    }
  }
  const removeVal = () =>{
    if(counter>0){
      counter = counter -1
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Counter Appication</h1>
      <p>Counter value: {counter}</p>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeVal}>Remove value</button>
    </>
  )
}

export default App
