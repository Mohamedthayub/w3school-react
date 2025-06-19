import React from "react";
import ReactDOM from "react-dom/client";

let people = [
    { name: "Arun", id: 1, role: "Software Engineer" },
    { name: "Priya", id: 2, role: "Frontend Developer" },
    { name: "Rahul", id: 3, role: "Backend Developer" },
    { name: "Sneha", id : 4, role: "UI/UX Designer" },
    { name: "Karthik", id: 5, role: "DevOps Engineer" },
    { name: "Divya", id : 6, role: "QA Tester" },
    { name: "Vikram", id : 7, role: "Project Manager" },
    { name: "Neha", id : 8, role: "Data Analyst" },
    { name: "Suresh", id : 9, role: "Full Stack Developer" },
    { name: "Meena", id : 10, role: "Product Owner" }
];

const Card = ({name,role,company}) => {
    return (
        <div>
            <div className="cart">
              <h1>{name}</h1>
              <p>{role}</p>
              <h5>{company}</h5>
           </div>
        </div>
    )
}
const App = () => {
    return <div>
        <div className="container">
            <Card name = "Thayub" role = "Software engineer" company = "Google"></Card>
            <Card name = "Mohamed" role = "Test engineer" company = "Microsoft"></Card>
            <Card name = "Mohideen" role = "Devops engineer" company = "Apple"></Card>
        </div>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

