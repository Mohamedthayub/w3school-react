import React, { useState,useEffect, use } from "react";
import ReactDOM from "react-dom/client";



function Counter(){
    const [count,setCount ] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        },1000)   // useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect
        // when the component changing it will useEffect will re-render the page  


    })
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
 