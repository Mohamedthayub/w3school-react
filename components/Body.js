import Navbar  from "./Navbar";
const Body = ({name}) => {
    let Nav = "Navbar";
    return (
        <div>
            <Navbar navItem = {Nav}></Navbar>
            <h1>{name}</h1>
        </div>
    )
}
export default Body;