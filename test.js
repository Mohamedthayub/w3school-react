// const number = [1,2,3,4,5,6];
// number.map((num) => {
//     console.log(num * 2);
// })
let people = [
    { name: "Arun", key: 1, role: "Software Engineer" },
    { name: "Priya", key: 2, role: "Frontend Developer" },
    { name: "Rahul", key: 3, role: "Backend Developer" },
    { name: "Sneha", key: 4, role: "UI/UX Designer" },
    { name: "Karthik", key: 5, role: "DevOps Engineer" },
    { name: "Divya", key: 6, role: "QA Tester" },
    { name: "Vikram", key: 7, role: "Project Manager" },
    { name: "Neha", key: 8, role: "Data Analyst" },
    { name: "Suresh", key: 9, role: "Full Stack Developer" },
    { name: "Meena", key: 10, role: "Product Owner" }
];

people.map((item) => {
    let container = document.createElement("div");
    let name = document.createElement("h1");
    let role = document.createElement("p");
    let key = document.createElement("p");
    name.innerText = item.name;
    role.innerText = item.role;
    key.innerText = item.key;
    container.appendChild(name);
    container.appendChild(role);
    container.appendChild(key);
    document.body.appendChild(container);
})