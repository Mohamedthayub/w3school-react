import React, { useState,useEffect,useRef} from "react";
import ReactDOM from "react-dom/client";
const names = [{name : "thayub",id : 1},{name : "mohamed",id: 2},{name : "bilal" , id: 3}];
const CreateHeading = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}
const App = () => {
    return (
        <div className="main">
           {
            names.map((item) => (
                <CreateHeading  key = {item.id}name = {item.name}/>
            ))
           }
       </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 