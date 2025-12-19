import React,{useState,useEffect} from "react";
function Counter(){
    const [count,setCount]=useState(0);
    const [Marks,setMarks]=useState(0);
    return(
        <div>
            <h2>Counter</h2>
            <p> count:{count}</p>
            <button onClick={() => setCount(count+1)}>Increase</button>
              </div>
    )
}

export default Counter     