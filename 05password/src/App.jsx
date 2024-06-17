import { useCallback, useRef, useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}"
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()* str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed,setPassword])
  
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)},[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h2 className='text-white text-center'>Password Generator</h2>
        <div className='flex shadow overflow-hidden mb-4 p-3'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 rounded-l-lg' placeholder='password' readOnly ref={passwordRef}/>
          <button onClick={copyPassword} className='text-white bg-blue-800 px-3 py-0.5 shrink-0 rounded-l-none'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={40} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" Checked={numberAllowed} id='numberInput' 
            onChange={()=>{
              setNumberAllowed(prev => !prev);
            }}/>
            <label htmlFor="numberInput">numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" Checked={charAllowed} id='charInput' 
            onChange={()=>{
              setCharAllowed(prev => !prev);
            }}/>
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
