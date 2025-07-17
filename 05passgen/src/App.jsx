import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passRef=useRef(null)

  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()+{}[]><_-|"


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)


    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassRefToClipboard=useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,28)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGen()
  }, [length, numberAllowed, charAllowed, passwordGen])


  return (
    <div className='w-full max-w-md mx-auto rounded-lg  my-8 bg-gray-500'>
      <h1 className='text-white text-center text-3xl'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 font-libertinus'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 text-orange-600 text-xl'
          placeholder='Password'
          readOnly
          ref={passRef}
        />

        <button 
        onClick={copyPassRefToClipboard}
        className='outline-none bg-orange-300 text-black px-2 py-2 shrink-0 hover:bg-black hover:text-white' >
          Copy
        </button>

      </div>

      <div className="flex text-sm gap-x-2">

        <div className="flex items-center gap-x-1 text-lg">

          <input
            type="range"
            min={8}
            max={28}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}

          />
          <label> Length:{length} </label>

        </div>


        <div className="flex items-center gap-x-1 text-lg">
          <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>


        <div className="flex items-center gap-x-1 text-lg">
          <input type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>

      </div>
    </div>
  )
}

export default App
