import React from "react";
import ReactDOM from "react-dom/client";


function CreateList(props){
    return <li>{props.brand}</li>
}



const App = () => {
    const cars = ["Bmw","Audi","Suzuki"];
    return <div>
    <ul>
        {cars.map((item) => <CreateList brand = {item}/>)}        

    </ul>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
