import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";



function Counter(){
    const [count,setCount ] = useState(0);
    const [name,setName]  = useState("thayub");
    
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 2);
        },1000);
    }); // i don't understand the array values . 
    return (
        <div className="main">
            <div className="counter-container">
                <h1> I have rendered  {count} times </h1>

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
 