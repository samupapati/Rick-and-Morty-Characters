//Filters
let filtersArr = []

export function pushFilter(newFilters){
    filtersArr.push(newFilters)
}

export function deleteFilter(newFilters){
    filtersArr = newFilters
}

export function filtersLength(){
    return filtersArr.length;
}

export function filters(){
    return filtersArr;
}    

//Pages number
let number = 1;

export function numberPages(){
 return number;
}

export function updateNumberPages(newNumber){
    number = newNumber
}
