import React from "react";
import ReactDOM from "react-dom/client";

// let people = [
//     { name: "Arun", id: 1, role: "Software Engineer" },
//     { name: "Priya", id: 2, role: "Frontend Developer" },
//     { name: "Rahul", id: 3, role: "Backend Developer" },
//     { name: "Sneha", id : 4, role: "UI/UX Designer" },
//     { name: "Karthik", id: 5, role: "DevOps Engineer" },
//     { name: "Divya", id : 6, role: "QA Tester" },
//     { name: "Vikram", id : 7, role: "Project Manager" },
//     { name: "Neha", id : 8, role: "Data Analyst" },
//     { name: "Suresh", id : 9, role: "Full Stack Developer" },
//     { name: "Meena", id : 10, role: "Product Owner" }
// ];
const names  = ["thayub","kaja","hussain","karthick","subair","feroz"
];
const CreateList = () => {
    return (
        <div>
            {names.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
        </div>
    )
}
const App = () => {
    return (
        <div>
            <CreateList/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

