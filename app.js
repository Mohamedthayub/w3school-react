import React, { useState } from "react";
import ReactDOM from "react-dom/client";
const Welcome = () => {
    return (
        <div>
            <h1>Welcome User</h1>
        </div>
    )
}
const Logged = () => {
    return (
        <div>
            <h1>Logged in User</h1>
        </div>
    )
}
const UserLogin = () => {
    const [login, setLogin] = useState("login");
    return(
        <div className="">
            <div>
                 {login == "login" ? <Logged/> : <Welcome/>}            
                <button className="button" onClick={() => {
                
                if(login === "login"){
                    setLogin("logout")
                }
                else{
                     setLogin("login");
                }
            }}>{login}</button>
            </div>
        </div>
    )
}
const App = () => {
    return (
        <div>
            <UserLogin/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
