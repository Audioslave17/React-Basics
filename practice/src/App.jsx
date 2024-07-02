import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [total,setTotal] = useState();
  const add = () => {
    setTotal(num1 + num2);
  }
  return (
    <div>
      <input type="number" value={num1} onChange={(e)=>setNum1(+e.target.value)}/>
      <input type="number" value={num2} onChange={(e)=>setNum2(+e.target.value)}/>
      <button onClick={add}>add</button>
      <p>{total}</p>
    </div>
  )
}

export default App
