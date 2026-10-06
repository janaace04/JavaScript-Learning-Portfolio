//.maps() = accept a callback and applies a function to each element of an array
//          then return a new array.




const number = [1, 2, 3, 4, 5];

const squared = number.map(square);
console.log(squared);
function square(element){
    return Math.pow(element, 2);
}