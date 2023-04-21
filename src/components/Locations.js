import Card from './Card'

function Locations(){
    const data = {}

    return(
        <div className="container content" id="locations">
            <Card data={data}/>
        </div>
    )
}

export default Locations;