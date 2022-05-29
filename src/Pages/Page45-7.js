import {React, useState} from "react";



function Counter(){
const [count, setCount] = useState(0);
const increasehandler = ()=> setCount(count+1);
const Decreasehandler = ()=> setCount(count-1);
    return(
        <div>
        <h1>{count}</h1>
        <button onClick={increasehandler}>Increse</button>
        <button onClick={Decreasehandler}>Decrese</button>
        </div>
    )
}

export default Counter;