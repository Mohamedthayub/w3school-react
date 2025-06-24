import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Aboutcar(){
    const [car , setCar] = useState({
        brand : "Hyundai venue",
        model : 2005,
        year : "1964",
        color : "red"
    })
    return (
        <div>
            <h1>{car.brand}</h1>
            <p style={{color : "red"}}>it is a {car.color} {car.brand} from {car.year}</p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Aboutcar/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

// Create a single Hook that holds an object: