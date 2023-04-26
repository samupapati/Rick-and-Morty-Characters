import { pushFilter, deleteFilter, filtersLength, filters } from "./states";

function ModalFilter({ handleInput, handleInputFilter, handleCheckFilter, resetAllFilters }) {
    let urlParams = {
        checkAlive: {
            first: 'status=alive',
            normal: '&status=alive'
        },
        checkDead: {
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
    function handleFilters(element) {
        if (element.checked) {
            if (filtersLength() === 0) {
                pushFilter(urlParams[element.id]['first'])
            } else {
                pushFilter(urlParams[element.id]['normal'])
            }
        } else {
            let newFilters = []
            filters().forEach(value => {
                if (value !== urlParams[element.id]['first'] && value !== urlParams[element.id]['normal']) {
                    newFilters.push(value)
                }
            })
            deleteFilter(newFilters)
        }
        let parameters = ''
        filters().forEach(value => {
            parameters += value
        })
        handleCheckFilter(parameters)
    }

    return (
        <div id="box-filter">
            <div className="box-filter-div-input">
                <input type="text" placeholder="Filter by name" onChange={(e) => handleInput(e.target.value)}/>
                <button onClick={() => handleInputFilter()}>Filter</button>
            </div>
            <div className="box-filter-div-check">
                <span>Filter by status: </span>
                
                <div>
                    <label htmlFor="checkAlive" id="label-alive">Alive</label>
                    <input type="checkbox" id="checkAlive" onChange={(e) => handleFilters(e.target)}/>
                </div>

                <div>
                    <label htmlFor="checkDead" id="label-dead">Dead</label>
                    <input type="checkbox" id="checkDead" onChange={(e) => handleFilters(e.target)}/>
                </div>  

                <div>
                    <label htmlFor="checkUnknown">Unknown</label>
                    <input type="checkbox" id="checkUnknown" onChange={(e) => handleFilters(e.target)}/>
                </div>
            </div>
            <div className="box-filter-div-check">
                <span>Filter by gender: </span>
                
                <div>
                    <label htmlFor="checkFemale" id="label-female">Female</label>
                    <input type="checkbox" id="checkFemale" onChange={(e) => handleFilters(e.target)}/>
                </div>

                <div>
                    <label htmlFor="checkMale" id="label-male">Male</label>
                    <input type="checkbox" id="checkMale" onChange={(e) => handleFilters(e.target)}/>
                </div>

                <div>
                    <label htmlFor="checkGenderless">Genderless</label>
                    <input type="checkbox" id="checkGenderless" onChange={(e) => handleFilters(e.target)}/>
                </div>

                <div>
                    <label htmlFor="checkGenderUnknown">Unknown</label>
                    <input type="checkbox" id="checkGenderUnknown" onChange={(e) => handleFilters(e.target)}/>
                </div>
            </div>
            
            <button id="button-reset" onClick={() => resetAllFilters()}>Reset</button>
        </div>
    )
} 

export default ModalFilter;