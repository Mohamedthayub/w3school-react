import React, { useState,useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";


function Counter(){
    const inputElement = useRef();
    
    const btnClicked = () => {
        console.log(inputElement.current);
        inputElement.current.style.background = "red";
    }

    return (
        <div>
            <input type="text" ref={inputElement}></input>
            <button onClick={btnClicked}>Click</button>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Counter/>
       </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 