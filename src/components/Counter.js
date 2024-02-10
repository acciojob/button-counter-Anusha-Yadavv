const Counter=()=>{
    let counter=0;
    clickMe=()=>{
        counter+=1;
    }
    return(
        <div>
            <p>Button clicked {} times</p>
            <button onClick="clickMe()">Click me</button>
        </div>
    )
}

export default Counter;
