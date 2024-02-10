import { useState } from "react";

const Counter=()=>{
    const [counter,setCount]=useState(0);
    const clickMe=()=>{
        setCount(prevCount=>prevCount+1);
    }
    {console.log("out ",counter)}

    return(
        <div>
            <p>Button clicked {counter} times</p>
            <button onClick={clickMe}>Click me</button>
        </div>
    )
}

export default Counter;