import React, {useState,useRef} from "react";
import Navbar from "./components/Navbar.js";
import ReactDOM from "react-dom/client";

const App =  () => {
    const [data, setData] = useState([]);
    const input = useRef(null);

    return (
        <div>
            {/* <Navbar cnt = {name} fn ={setName}/> */}
            <input ref={input} type="text"></input> {/* we select the html element using  useref  ref keyword use to conect the html element*/}
            <button onClick={() => {setData([...data,input.current.value])}}>Submit</button> {/* we send the data current data to  the array when the button click*/}
            {data.map((item,index) => { return <h2 key={index}>{item}</h2>})} {/*we iterate the value using map function but here we should index as key when we iterate the array data */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 