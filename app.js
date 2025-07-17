import React, {useState,useRef, useEffect} from "react";
// import Navbar from "./components/Navbar.js";
import ReactDOM from "react-dom/client";


const Counter = () => {
    const [count, setCounter] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button className="increament" onClick={() => {setCounter(count + 1)}}>increament</button>
            </div>
            <div>
                <button className="increament" onClick={() => {setCounter(0)}}>Reset</button>
            </div>
            <div>
                <button className="increament" onClick={() => {setCounter(count -  1)}}>decreament</button>
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
 