import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Like = () => {
    return (
        <div>
            <button>LIke</button>
        </div>
    )
}
const Dislike = () => {
    return (
        <div>
            <button>Dislike</button>
        </div>
    )
}
function LikeAndDislike(){
    let [like , setLike] = useState("like");
    return (
        <div>
            <button className="button" onClick={() => {
                if(like === "like"){
                    setLike("dislike");
                    
                }
                else{
                    setLike("like");
                }
            }}>{like}</button>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <LikeAndDislike/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
