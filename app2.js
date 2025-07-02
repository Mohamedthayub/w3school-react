import React, { useState,useEffect, useRef,useMemo } from "react";
import ReactDOM from "react-dom/client";


function Summa(){
    // const [count, setCount ]= useState(0);
    

    const inputElement = useRef("");
    const btnClicked = () => {
        console.log(inputElement.current);
        inputElement.current.style.background = "red";  // this we have to change the style by useRef
        
    }
    return (
        <div>
            <input type="text" ref={inputElement}></input>
            <button onClick={btnClicked}>Change</button>  
        </div>
    )

    
}

const App = () => {
    return (
       <Summa/>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 