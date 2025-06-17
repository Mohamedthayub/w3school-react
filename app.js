import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
    return (
        <div>
            <h1>Asalamu alaikum</h1>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);