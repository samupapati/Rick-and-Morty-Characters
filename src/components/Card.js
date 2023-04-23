function Card({data, componentName}){
    function handleColorStatus(text){
        if(text === 'Alive'){
            return (<p style={{color: '#C0DF40'}}><span>status:</span> {text}</p>)
        }
        if(text === 'Dead'){
            return (<p style={{color: '#A1140A'}}><span>status:</span> {text}</p>)
        }
        return (<p><span>status:</span> {text}</p>)
    }
    function handleColorGender(text){
        if(text === 'Male'){
            return(<p style={{color: '#7f85d8'}}><span>gender:</span> {text}</p>)
        }
        if(text === 'Female'){
            return(<p style={{color: 'pink'}}><span>gender:</span> {text}</p>)
        }
        return(<p><span>gender:</span> {text}</p>)
    }

    return(
        <>
        {data.map(item => {
            return (
                <div className="card">
                    <img src={item.image}/>
                    <div className="card-info">
                        <h2>{item.name}</h2>
                        <p><span>specie:</span> {item.species} {item.type !== '' ? '- ' + item.type : ''}</p>
                        {handleColorGender(item.gender)}
                        {handleColorStatus(item.status)}
                        <p><span>origin:</span> {item.origin.name}</p>
                        <p><span>last location:</span> {item.location.name}</p>
                    </div>
            </div>
            )
        })}
        </>
    )
}

export default Card;