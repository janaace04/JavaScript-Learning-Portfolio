let Rnums = document.getElementById("Rnum");
let RLabs = document.getElementById("RLab");

let Random =0;



Rnums.onclick = function(){
    Random = Math.floor(Math.random() * 6) + 1;
    RLabs.textContent = Random;
}
