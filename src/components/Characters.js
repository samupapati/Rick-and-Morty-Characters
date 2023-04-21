import { useEffect, useMemo, useState } from 'react'
import Card from './Card'
import Buttons from './Buttons';

function Characters(){
    let [counter, setCounter] = useState(1)
    let [linkAPI, setLinkAPI] = useState('https://rickandmortyapi.com/api/character/?page=' + counter);
    const [info, setInfo] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    async function getData(){
        let response = await fetch(linkAPI);
        let result = await response.json();
        setInfo(result.info)
        setData(result.results)
    }

    function handlePage(direction){
        if(direction === 'left'){
            setCounter((counter - 1))
        }
        setCounter(counter + 1)
    }

    return(
        <div className="container content" id="characters">
            {counter}
            <Card data={data}/>
            <Buttons handlePage={handlePage}/>
        </div>
    )
}

export default Characters;