import React, { useState,useEffect,useRef} from "react";
import ReactDOM from "react-dom/client";


function ShowText(){
    const[inputValue,setInputvalue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    })
    return (
        <div>
            <h1> This is Count : {count.current}</h1>
            <input value={inputValue} onChange={(e) => {setInputvalue(e.target.value)}}></input>
            <h1>{inputValue}</h1>
        </div>
    )
}
const App = () => {
    return (
        <div className="main">
            <div>
              <ShowText/>
            </div>
       </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 