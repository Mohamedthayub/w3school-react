import React from "react";
import ReactDOM from "react-dom/client";


const Box = (props) => {
    return (
        <div className="box">
           <div>
            <h2>{props.name}</h2>
            <h3>{props.phone}</h3>
            <p>{props.address}</p>
            <p>{props.role}</p>
          </div>
        </div>

    )
}
const BoxContainer = () => {
    return (
        <div className="box-container">
            <Box name="Mohamed Thayub" phone="8220726040" address="42a/5 South Thaikka Street" role="Software Engineer" />
            <Box name="Diya Kapoor" phone="9123456780" address="45 Sector 21, Gurugram" role="Backend Developer" />
            <Box name="Rohan Singh" phone="9988776655" address="78 Park Street, Kolkata" role="Full Stack Developer" />
            <Box name="Sneha Sharma" phone="9345678901" address="11 Residency Road, Chennai" role="UI/UX Designer" />
            <Box name="Kunal Verma" phone="9001234567" address="2 Marine Drive, Mumbai" role="DevOps Engineer" />
            <Box name="Meera Nair" phone="9812345678" address="88 Hill Road, Pune" role="QA Engineer" />
            <Box name="Arjun Reddy" phone="7894561230" address="5 Banjara Hills, Hyderabad" role="Product Manager" />
            <Box name="Ishita Roy" phone="9008765432" address="22 Camac Street, Kolkata" role="Data Scientist" />
            <Box name="Vikram Das" phone="9654321078" address="6 Sector 62, Noida" role="System Administrator" />
            <Box name="Neha Pillai" phone="9876123450" address="33 Brigade Road, Bengaluru" role="Business Analyst" />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BoxContainer/>);
