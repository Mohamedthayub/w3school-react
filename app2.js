import React, { useState,useEffect, useRef,useMemp,useCallback } from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
function SmallCalcultor(){
    const [count , setCounter] = useState(0);
    const newFn = useCallback(() => {},[]);
    /*
    whenever the page re-render the function will create ones after 
    whenever button click happen function will not create again . the useCallback hook  cache the function  in first render. then  it will not create next time
    that will use from useCallback cache  memory this is how useCallback hook works 
    */

    /*
    whenever click the button the component will re-render and  we are passing the  function to Header component the function is creating every render  .
    to solve this problem we use useCallback hook 
    */
   return (
    <div className="main">
        <div> 
            <Header newFn = {newFn}/> 
              <h1>{count}</h1>
         <button onClick={() => {
            setCounter(count + 1)
        }} className="btn">Increament</button>
        </div>
    </div>
   )
}

const App = () => {
    return (
        <SmallCalcultor/>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 