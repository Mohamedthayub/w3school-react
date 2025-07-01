import React, { useState,useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";


function Calculator(){
    const [number , setNumber] = useState(0);
    // const [count , setCounter ] = useState(0);
    

    function cubeNum (num){
        console.log("calculation Done ...");
        return Math.pow(num,3);
    }
    const result = cubeNum(number);

    return (
        <div>
            <input type="number" value={number} onChange={(e) => {setNumber(Number(e.target.value))}}></input>
            <h1>Cube of the Number : {result}</h1>
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
 