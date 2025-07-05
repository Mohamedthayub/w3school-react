import React, {useState,useRef} from "react";
import Navbar from "./components/Navbar.js";
import ReactDOM from "react-dom/client";

const App =  () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Navbar cnt = {count} fn ={setCount}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 