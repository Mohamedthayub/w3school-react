import React, { useState,useEffect, useRef,useMemo } from "react";
import ReactDOM from "react-dom/client";


function SmallCalcultor(){
    const [number,setNumber] = useState(0);
    const [count , setCounter] = useState(0);
    
    function findCube(num){
        console.log("calculation done ...")
        return Math.pow(num,3);
    }
    
    const result = useMemo(() => findCube(number), [number]);
    /* this useMemo hook will return the memoized value  .what i have done here is when the value number changes the function will run
     otherwise it won't run this perfomance thing we have done with  useMemo hook  */
    return (
        <div>
            <div className="main">
                 <input value={number} onChange={(e) => {
                setNumber(e.target.value)
            }} ></input>
            <h1>Cube value is :{result}</h1>
            <button onClick={() => {
                setCounter(count  + 1)
            }}>Count++</button>
            <h1>Conter : {count}</h1>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <SmallCalcultor/>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 