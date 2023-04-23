import { useState } from "react";

function ModalFilter({handleInput, handleInputFilter}){

    const [filters, setFilters] = useState([]);
    function handleFilters(element){
        let urlParams = {
            checkAlive: {
                first: 'status=alive',
                normal: '&status=alive'
            },
            checkDead:  {
                first: 'status=dead',
                normal: '&status=dead'
            },
            checkUnknown: {
                first: 'status=unknown',
                normal: '&status=unknown'
            },
            checkFemale: {
                first: 'gender=female',
                normal: '&gender=female'
            },
            checkMale: {
                first: 'gender=male',
                normal: '&gender=male'
            },
            checkGenderless: {
                first: 'gender=genderless',
                normal: '&gender=genderless'
            },
            checkGenderUnknown: {
                first: 'gender=unknown',
                normal: '&gender=unknown'
            }
        }
        if(element.checked){
            if(filters.length === 0){
                setFilters([...filters, urlParams[element.id]['first']]);
            }else{
                setFilters([...filters, urlParams[element.id]['normal']]);
            }
        }else{
            let newFilters = []
            filters.forEach(value => {
                if(value !== urlParams[element.id]['first'] && value !== urlParams[element.id]['normal']){
                    newFilters.push(value)
                }
            })
            setFilters(newFilters)
        }
    }

    return(
        <div id="modal-filter">
            <div>
                <input placeholder="Filter by name" onChange={(e) => handleInput(e.target.value)}/>
                <button onClick={() => handleInputFilter()}>Filter</button>
            </div>
            <div>
                <span>Filter by status: </span>
                
                <label htmlFor="checkAlive">Alive</label>
                <input type="checkbox" id="checkAlive" onChange={(e) => handleFilters(e.target)}/>
                
                <label htmlFor="checkDead">Dead</label>
                <input type="checkbox" id="checkDead" onChange={(e) => handleFilters(e.target)}/>

                <label htmlFor="checkUnknown">Unknown</label>
                <input type="checkbox" id="checkUnknown" onChange={(e) => handleFilters(e.target)}/>
            </div>
            <div>
                <span>Filter by gender: </span>
                
                <label htmlFor="checkFemale">Female</label>
                <input type="checkbox" id="checkFemale" onChange={(e) => handleFilters(e.target)}/>
                
                <label htmlFor="checkMale">Male</label>
                <input type="checkbox" id="checkMale" onChange={(e) => handleFilters(e.target)}/>

                <label htmlFor="checkGenderless">Genderless</label>
                <input type="checkbox" id="checkGenderless" onChange={(e) => handleFilters(e.target)}/>

                <label htmlFor="checkGenderUnknown">Unknown</label>
                <input type="checkbox" id="checkGenderUnknown" onChange={(e) => handleFilters(e.target)}/>
            </div>
            {filters}
        </div>
    )
}

export default ModalFilter;