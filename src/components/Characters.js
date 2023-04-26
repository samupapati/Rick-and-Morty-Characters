import { useEffect, useState } from 'react'
import Card from './Card'
import Buttons from './Buttons';
import ModalFilter from './Filter';
import rickSad from '../assets/imgs/rick-sad.jpg'
import { deleteFilter, filters, updateNumberPages } from './states';
import { filtersLength } from './states';

function Characters(){
    let link = 'https://rickandmortyapi.com/api/character/?page='
    const [counter, setCounter] = useState(1)
    const [numberPages, setNumberPages] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData(link + counter);
    }, [])

    async function getData(link){
        let response = await fetch(link);
        let result = await response.json();
        if(result.hasOwnProperty('info')){
            updateNumberPages(result.info.pages)
            setNumberPages(result.info.pages)
            setData(result.results)
        }else{
            setNumberPages('')
            setData('')
        }
    }

    function handlePage(direction){
        if(valueInput !== ''){
            if(direction === 'left'){
                getData(linkFilter + 'page=' +  (counter - 1) + '&name=' + valueInput)
                setCounter(counter - 1)
                window.scrollTo(0, 0)
            }else{
                getData(linkFilter + 'page=' + (counter + 1) + '&name=' + valueInput)
                setCounter(counter + 1)
                window.scrollTo(0, 0)
            }
        } else if(filtersLength() === 0){
            if(direction === 'left'){
                getData(link + (counter - 1))
                setCounter(counter - 1)
                window.scrollTo(0, 0)
            }else{
                getData(link + (counter + 1))
                setCounter(counter + 1)
                window.scrollTo(0, 0)
            }
        }else{
            let parameters = ''
            filters().forEach(value => {
                parameters += value
            })
            if(direction === 'left'){
                getData(linkFilter + 'page=' +  (counter - 1) + '&' + parameters)
                setCounter(counter - 1)
                window.scrollTo(0, 0)
            }else{
                getData(linkFilter + 'page=' + (counter + 1) + '&' + parameters)
                setCounter(counter + 1)
                window.scrollTo(0, 0)
            }
        }
    }

    const [valueInput, setValueInput] = useState('');
    let linkFilter = 'https://rickandmortyapi.com/api/character/?';
    function handleInput(value){
        setValueInput(value)
    }
    function handleInputFilter(){
        if(valueInput !== ''){
            setCounter(1)
            getData(linkFilter + 'name=' + valueInput);
        }
    }
    function handleCheckFilter(parameters){
        setCounter(1)
        getData(linkFilter + parameters)
    }
    function resetAllFilters(){
        setCounter(1)
        setValueInput('');
        deleteFilter([]);
        let inputsChecked = document.querySelectorAll('input:checked')
        inputsChecked.forEach(input => {
            input.checked = false;
        })
        getData(link + ((counter + 1) - counter));
        window.scrollTo(0, 0)
    }
    return(
        <>
            <ModalFilter handleInput={handleInput} handleInputFilter={handleInputFilter} handleCheckFilter={handleCheckFilter} resetAllFilters={resetAllFilters}/>
            <div className="container content" id="characters">
                {numberPages === '' 
                ?
                    <div id='not-found'>
                        <img id="not-found-img" src={rickSad}/>
                        <p id='not-found-description'>No results were found</p>
                    </div>
                :
                    <Card data={data}/>
                }
                <Buttons handlePage={handlePage} counter={counter}/>
            </div>
        </>
    )
}

export default Characters;