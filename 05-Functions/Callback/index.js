// callback = a function is passed as an argument to another function

// when doon call next

function sum(callback, x, y){
    const result = x + y;
    callback(result);
}

function displayResult(result){
    document.getElementById("mh").textContent = result;
}

sum(displayResult, 6, 9);