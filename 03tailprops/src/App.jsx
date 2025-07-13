import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {


const[count,setCount]=useState(0)


  return (
    <>
      <button onClick={()=>setCount(count+1)} className='bg-green-800 text-2xl text-white p-4 rounded-xl mb-4'>Click me</button>

      <div className='text-2xl text-red-700 '>
        Counter Value={count}

      </div>

      <Card cardname="Graffity"/>
      <Card cardname="Copy Product" productimg=<>
      <img src="https://picsum.photos/200/300/?blur=2" alt="img" />
      </>
      />
    </>
    
  )
}

export default App

