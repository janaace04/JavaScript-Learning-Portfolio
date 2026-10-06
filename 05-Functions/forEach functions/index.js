// forEach() = method used to iterate over the element of an array and apply a specified
//             function(callback) to each element.

//             array.forEach(callback);
//             element, index, array are provided


const numbers = [{
    name: "Jana",
    age: 23
},
{
    name: "Shibi",
    age: 23
},
{
    name: "Ace",
    age: 23
}

];

// numbers.forEach(double);

// function double(element, index, array){
//     array[index] = element * 2;
//     //console.log(element); 
// }

// numbers.forEach(display);

// function display(element){
//     console.log(element);
// }

numbers.forEach((res, index)=>{
    console.log(res.name, index);
})

