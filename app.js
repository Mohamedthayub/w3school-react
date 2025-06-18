import React from "react";
import ReactDOM from "react-dom/client";



const Name = () => {
    return (
        <h1>My Name is Thayub </h1>
    )
}
const NoName = () => {
    return (
        <h1> No Name</h1>
    )
}
function ShowName(props){
    const isName = props.isName
    if(isName.length != 0){
        return  <Name/>
    }
    else{
        return <NoName/>
    }
}
const  App = () => {
    return (
        <div>
            <ShowName isName = {"1"}></ShowName>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
