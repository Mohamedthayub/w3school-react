import React from "react";
import ReactDOM from "react-dom/client";

const Greater = () => {
    return <h1 style={{color : "green"}}>you are eligible to put vote</h1>
}
const Lesser = () => {
    return <h1 style={{color : "red"}}>You are not eligible</h1>
}
const CheckAge = (props) => {
    const isGoal = props.isGoal;
    if(isGoal > 18 ){
        return <Greater/>
    }
    else{
        return <Lesser/>
    }
}

const App = () => {
    return <div>
    <CheckAge isGoal = {12} ></CheckAge>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
