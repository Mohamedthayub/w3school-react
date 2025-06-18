import React from "react";
import ReactDOM from "react-dom/client";



const Containers = () => {
    return (
        <div>
            <div className="container1">
                <h1>Hello</h1>
            </div>
            <div className="container2">
                <h1>Hello</h1>
            </div>
            <div className="container3">
                <h1>Hello</h1>
            </div>
        </div>

    )
}
const Layouts = () => {
  return (
    <div className="container">
        <Containers/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Layouts/>);