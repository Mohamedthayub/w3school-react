const Card = ({data,func}) => {

    return (
        <div>
            <h1>this is new Component</h1>
            <p>{data}</p>
            <button onClick={() => func(data + 10)}>Add</button>
        </div>
    )
}

export default Card;