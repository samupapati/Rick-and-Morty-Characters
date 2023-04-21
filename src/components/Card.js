function Card({data}){
    function handleColor(text){
        if(text === 'Alive'){
            return (<p style={{color: '#C0DF40'}}>{text}</p>)
        }
        if(text === 'unknown'){
            return (<p style={{color: '#fa6000'}}>{text}</p>)
        }
        return (<p style={{color: '#A1140A'}}>{text}</p>)
    }
    return(
        <>
        {data.map(item => {
            return (
                <div className="card">
                <img src={item.image}/>
                <div className="card-info">
                    <h2>{item.name}</h2>
                    {handleColor(item.status)}
                    <p>{item.species}</p>
                    <p className="origin">{item.origin.name}</p>
                </div>
            </div>
            )
        })}
        </>
    )
}

export default Card;