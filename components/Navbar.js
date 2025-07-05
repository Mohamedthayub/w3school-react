const Navbar = ({cnt,fn}) => {
    return (
        <div>
            <h1>{cnt}</h1>
            <button onClick={() => fn("thayub")}>add</button>
        </div>
    )
}

export default Navbar