import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Change(){
    const [color,setcolor] = useState("blue");
    
    const changeColor  = () => {
        setcolor("red");
    }
    return(
        <div className="main">
            <div>
              <h1>the color is {color}</h1>
              <div className="btn-container">
                 <button onClick={changeColor}>button</button>
              </div>
           </div>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Change/>
       </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 