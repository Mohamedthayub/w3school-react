import React, { useState,useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
// import Navbar from "./src/Navbar.js";
// import Card  from "./src/Button.js";

const App = () => {
    const  Input = useRef(null); 
    const  [data, setData ] = useState([]);
    return (
        <div>
            <input type="text" ref={Input}></input>
            <button onClick={() => {setData([...data, Input.current.value])}}>Submit</button>
            {data.map((item,idx) => { return <h2 key={idx}>{item}</h2>})}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)