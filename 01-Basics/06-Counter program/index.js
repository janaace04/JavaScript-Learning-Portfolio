const countL = document.getElementById("countL");
const inc = document.getElementById("add");
const dec = document.getElementById("sub");
const reset = document.getElementById("reset");
let count = 0;

inc.onclick = function(){
    count++;
    countL.textContent = count;
}

dec.onclick = function(){
    count--;
    countL.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countL.textContent = count;
}