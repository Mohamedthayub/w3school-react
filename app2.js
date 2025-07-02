import React, { useState,useEffect, useRef,useMemo } from "react";
import ReactDOM from "react-dom/client";


const App = () => {
    return (
        <SmallCalcultor/>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 