import React from "react";
import ReactDOM from "react-dom/client";

const Greater = () => {
    return <h1 style={{color : "green"}}>you are eligible to put vote</h1>
}
const Lesser = () => {
    return <h1 style={{color : "red"}}>You are not eligible</h1>
}

function CheckAge(props){
    const isage =  props.isage;
    return <div>  {
        isage > 18 ? <Greater/> :  <Lesser/>
    }
    </div>
}

const App = () => {
    return <div>
        <CheckAge isage = {18}></CheckAge>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
