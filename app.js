import React, { useState,useEffect, useRef,useMemo } from "react";
import ReactDOM from "react-dom/client";


function Calculator(){
    const [number , setNumber] = useState(0);
    const [count , setCounter ] = useState(0);
    

    function cubeNum (num){
        console.log("calculation Done ...");

        return Math.pow(num,3);
    }
    const result = useMemo(() => cubeNum(number));
    return (
        <div className="main">
            <div>
              <input type="number" value={number} onChange={(e) => {setNumber(Number(e.target.value))}}></input>
              <h1>Cube of the Number : {result}</h1>
              <button onClick={() => setCounter(count + 1)}>Counter++</button>
              <h1>Counter : {count}</h1>
           </div>
        </div>
    )
}

const App = () => {
    return (
        <div>
           <Calculator/>
       </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 