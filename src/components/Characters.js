import { useEffect, useState } from 'react'
import Card from './Card'
import Buttons from './Buttons';
import ModalFilter from './ModalFilter';
import { AiOutlineEllipsis } from "react-icons/ai"
import rickSad from '../assets/imgs/rick-sad.jpg'

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
        if(result.hasOwnProperty('info')){
            setInfo(result.info)
            setData(result.results)
        }else{
            setInfo('')
            setData('')
        }
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

    const [showModal, setShowModal] = useState(false);
    function handleModal(){
        setShowModal(!showModal)
    }

    const [valueInput, setValueInput] = useState('');
    let linkFilter = 'https://rickandmortyapi.com/api/character/?name=';
    function handleInput(value){
        setValueInput(value)
    }
    function handleInputFilter(){
        if(valueInput !== ''){
            getData(linkFilter + valueInput);
        }
        handleModal()
    }

    return(
        <>
            <AiOutlineEllipsis id="show-modal-btn" onClick={() => handleModal()}/>
            {showModal === true 
            ?
                <ModalFilter handleInput={handleInput} handleInputFilter={handleInputFilter}/>
            :
                ''
            }
            <div className="container content" id="characters">
                {info === '' 
                ?
                    <div id='not-found'>
                        <img id="not-found-img" src={rickSad}/>
                        <p id='not-found-description'>No results were found</p>
                    </div>
                :
                    <Card data={data} componentName={'characters'}/>
                }
                <Buttons handlePage={handlePage} counter={counter} nPages={info.pages}/>
            </div>
        </>
    )
}

export default Characters;