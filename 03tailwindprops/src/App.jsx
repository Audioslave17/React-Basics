import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-800 text-white p-4 rounded-xl mb-5'>hello world</h1>
      <Card userName = "Chameli" btnText="click to vibrate"/>
      <Card userName = "Champa" btnText="click to finger"/>
    </>
  )
}

export default App
