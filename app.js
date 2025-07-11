import React, {useState,useRef, useEffect} from "react";
// import Navbar from "./components/Navbar.js";
import ReactDOM from "react-dom/client";


const App = () => {
    const [data,setData] = useState([]);
    const inputRef = useRef(null);
    return (
        <div>
            <div>
                <input ref={inputRef} type="text"></input>
                <button onClick={() => { setData([...data,inputRef.current.value])}}>Submit</button>
                {data.map((item,index) => { return <h1 key={index}>{item}</h1>})}
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 