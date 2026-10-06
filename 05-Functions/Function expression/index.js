// function expression = a way to define functions as a values or variables.


const number = [1, 2, 3, 4, 5, 6, 7];

const square = number.map(function(element){
    return Math.pow(element, 2);
});

console.log(`Squared ${square}`);


const even =  number.filter(function(element){
    return element % 2 === 0;
});

console.log(`Even ${even}`);

const sum = number.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(`Total sum = ${sum}`);