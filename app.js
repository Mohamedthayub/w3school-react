import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
    const [color , setColor ] = useState("red");
    const headingStyle = {
        backgroundColor: color,
        padding: "10px",
        fontFamily: "Sans-Serif",
        borderRadius : "10px",
        padding : "10px",
        margin : "10px"

    }
    return(
        <div className="main">
            <div className="container">
            <h1 style={headingStyle}>this is heading</h1>

            <button onClick={() => {
                setColor("yellow")
            }} className="yellow-btn">Yellow</button>

            <button onClick={() => {
              setColor("violet")
            }} className="violet-btn">Violet</button>
            <button onClick={() => {
                setColor("blue")
            }} className="blue-btn">blue</button>
             <button onClick={() => {
                setColor("orange")
            }} className="orange-btn">Orange</button> 
            </div>
        </div>


    )
}
const App = () => {
    return (
        <div>
            <Heading/>
       </div>

    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
