const textbox = document.getElementById("textbox");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");

function convert(){
    if(toCelsius.checked){
        // console.log("cel")
        let fah = Number(textbox.value);
        let cel = (fah - 32) * (5/9);
        result.textContent = `${cel} celsius`;
    }
    else if(toFahrenheit.checked){
        let cel = Number(textbox.value);
        // console.log("Fah");
        let fah = (cel * (9/5)) + 32;
        result.textContent = `${fah} Fahrenhiet`
    }
    else{
        result.textContent = "OOPS you forgot to select!!";
    }
}