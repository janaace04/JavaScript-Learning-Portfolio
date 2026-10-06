// Arrow functions = A concise way to write function expressions good for simple functions
//                   that you use only once
//                   (parameters) => code.\


const numbers = [1, 2, 3, 4, 5, 6, 7];

const square = numbers.map((element) => Math.pow(element, 2));
console.log("squared: ", square);

const odd = numbers.filter((element) => element%2 !== 0);
console.log(`Odd ${odd}`);

const total = numbers.reduce((accumulator, element) => element + accumulator);
console.log(`Total: ${total}`);