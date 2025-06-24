import React, { useState } from "react";
import ReactDOM from "react-dom/client";


function  Counter(){
    const [count , setCount ]  = useState(0);
    return (
        <div className="main">
            <div className="counterContainer">
                <h1>counter App</h1>   
            <h2>{count}</h2>
            <button onClick={() => {
                setCount(count + 1)
            }}>increase</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>decrease</button>
            <button onClick={() => {
                setCount(0)
            }}>reset</button>
            </div>
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
