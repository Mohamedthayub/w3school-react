import React, { useState,useEffect,useRef} from "react";
import ReactDOM from "react-dom/client";


function  Counter() {
    const [count, setCounter] = useState(0);
    return (
        <div>
            <div className="flex justify-center items-center mt-92">
                <div>
                    <h1 className="text-center text-3xl"> Count is : {count}</h1>
            <div className="mt-4">
                <button onClick={() => {
                    setCounter(count + 1)
                }} className="p-4 focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Increament</button>
                <button onClick={() => {
                    setCounter(0)
                }} className="focus:outline-none text-white bg-red-700 hover:bg-red-800   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reset</button>
                <button
                onClick={() => {
                    setCounter(count - 1)
                }} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Decreament</button>
            </div>
                </div>
            </div>
        </div>
    )
}
const App = () => {
    return (
        <div className="">
            <Counter/>
       </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
 