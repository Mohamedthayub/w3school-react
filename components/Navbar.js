const Navbar = ({cnt,setcnt}) => {
    return  (
        <div>
            <h1>{cnt}</h1>
            <button onClick={() => {setcnt(() => cnt + 1)}} >Add</button>
        </div>
    )
}
export default Navbar;