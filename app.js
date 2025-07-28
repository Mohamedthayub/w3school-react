import React, { useState,useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
// import thayub from "./images/thayub.jpg";// correct import
import Render from "./src/Images.jsx";


const App = () => {
    return <div>
        <img src=""></img>
        <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" className="image"></img>
        <h1>Hello world</h1>
        <Render/>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
