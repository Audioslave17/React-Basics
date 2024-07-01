import { useState } from 'react'
import './App.css'

function App() {
  let [val, setVal] = useState(10);
  const addValue = () => {
    if(val<20){
      val = val + 1;
      setVal(val);
    }
  }
  const removeValue = () => {
    if(val>0){
      val = val - 1;
      setVal(val);
    }
  }
  return (
    <div>
      <h1>Counter Application</h1>
      <p>Current value: {val}</p>

      <button onClick={addValue}>add</button>
      <button onClick={removeValue}>remove</button>
    </div>
  )
}

export default App
