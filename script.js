const numberArray = [23, 13, 34, 56, 99, 101]

//cerca il numero 56
function findNumber(array, number){
    let isFound = false;
    counter = 0;
    while(!isFound && counter < array.length){
        if(array[counter] === number) isFound = true;
        counter++;
    }
    return isFound ? number: number + ' is not present in the array'
}
console.log('stampo se trovo il numero 56')
console.log(findNumber(numberArray, 56))

//Stampo solo i numeri dopo 56
function printAfterNumber(array, number){
    let isNumberFound = false
    for(let i = 0; i < array.length; i++){
        if(isNumberFound) console.log(array[i])
        else{
            if(array[i] === number) isNumberFound = true
        }
    }
}
console.log('stampo tutti i numeri dopo il 56')
printAfterNumber(numberArray, 56)

//stampo tutto tranne 56
function printAllButNumber(array, number){
    for(let i = 0; i < array.length; i++){
        if(array[i] !== number) console.log(array[i])
    }
}
console.log('Stampo tutto tranne il 56')
printAllButNumber(numberArray,56)

//solo numeri dispari
function printOdd(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 1) console.log(array[i])
    }
}
console.log('stampo solo i numeri dispari')
printOdd(numberArray)