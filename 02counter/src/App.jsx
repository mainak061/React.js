import { useState } from 'react';

import './App.css';



function App() {
  
  let[Counter, setCounter]=useState(5)
  const[Message,setMessage]=useState("")

  // let Counter = 5;

  const addValue=()=>{
    // Counter=Counter+1;
    if (Counter>=10) {
      setMessage("Invalid Message (Counter can't go above 10)");
      
    } else {
      setCounter(Counter+1)
      setMessage("")
    }
  }


  const removeValue=()=>{
    if (Counter<=0) {
      setMessage("Invalid Message (Counter can't go below 0)")
    }
    else {
      setCounter(Counter-1);
      setMessage("")
    }
  }
  console.log(Counter);
  
  
  // useEffect(() => {
  //     if (Counter === 0) {
  //       setMessage("Invalid Message (Counter can't go below 0)");
  //     } else {
  //       setMessage("");
  //     }
  //   }, [Counter]);

  return (
    <>
      <h1>React Practice 2</h1>
      <h2>Counter value:{Counter}</h2>
      
      <h3>{Message}</h3>
      <button onClick={addValue} >Add Value</button>
      <br />
      <br />
      <button onClick={removeValue} disabled={removeValue<=0} >remove Value</button>
    </>
  )
}

export default App
