const Navbar = ({cnt,fn}) => {
    return (
        <div>
            <h1>{cnt}</h1>
            <button onClick={() => fn(cnt + 1)}>add</button>
        </div>
    )
}

export default Navbar