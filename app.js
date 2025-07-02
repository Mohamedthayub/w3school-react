import React, { useState,useEffect, useRef,useMemo } from "react";
import ReactDOM from "react-dom/client";


function Calculator(){
    const [count ,setCounter] = useState(0);

    return (
        <div>
            <button onClick={() => {
                setCounter(count + 1)
            }}>Increament</button>
        </div>
    )

}

const App = () => {
    return (
        <div>
           <Calculator/>
       </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 