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
    let [like , setLike] = useState("Like 👍");
    
    const buttonstyle = {
    backgroundColor: like === "Like 👍" ? "green" :  "red", 
    padding: "10px",
    borderRadius: "10px",
    margin: "10px" ,
    fontSize: "20px"

    }
    return (
        <div>
            <button style={buttonstyle} className="button" onClick={() => {
                if(like === "Like 👍"){
                  setLike("Dislike 👎");
                }
                else{
                    setLike("Like 👍");
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
