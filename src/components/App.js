
import React from "react";
import './../styles/App.css';
<<<<<<< HEAD
import { useState } from "react"
=======
import Counter from './components/Counter';
>>>>>>> e102f489d96b7a3833839346becc396d0b8c7051


const App = () => {
  const [count,setCount]=useState(0);
  const clickMe=()=>{
    setCount(count+1);
  }
  
  return (
    <div>
        {/* Do not remove the main div */}
<<<<<<< HEAD
        <p>Button clicked {count} times</p>
        <button onClick={clickMe}>Click me</button>
      
=======
>>>>>>> e102f489d96b7a3833839346becc396d0b8c7051
    </div>
  )
}

export default App
