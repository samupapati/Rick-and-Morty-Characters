import { useEffect, useState } from 'react'
import Card from './Card'
import Buttons from './Buttons';

function Characters(){
    let link = 'https://rickandmortyapi.com/api/character/?page='
    const [counter, setCounter] = useState(1)
    const [info, setInfo] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData(link + counter);
    }, [])

    async function getData(link){
        let response = await fetch(link);
        let result = await response.json();
        setInfo(result.info)
        setData(result.results)
    }

    function handlePage(direction){
        if(direction === 'left'){
            getData(link + (counter - 1))
            setCounter(counter - 1)
            window.scrollTo(0, 0)
        }else{
            getData(link + (counter + 1))
            setCounter(counter + 1)
            window.scrollTo(0, 0)
        }
    }

    return(
        <div className="container content" id="characters">
            <Card data={data}/>
            <Buttons handlePage={handlePage} counter={counter} nPages={info.pages}/>
        </div>
    )
}

export default Characters;