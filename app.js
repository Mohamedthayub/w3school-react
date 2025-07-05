import React, {useState,useRef} from "react";
import Navbar from "./components/Navbar.js";
import ReactDOM from "react-dom/client";

const App =  () => {
    const [name, setName] = useState("");
    const input = useRef(null);
    return (
        <div>
            {/* <Navbar cnt = {name} fn ={setName}/> */}
            <input ref={input} type="text"></input>
            <button onClick={() => {console.log(input.current.value)}}>Submit</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 