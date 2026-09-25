const min = 1;
const max = 100;

const randomnumber = Math.floor(Math.random() * (max - min) + 1) + min;

let attempts = 0;
let guess;
let Running = true;

while(Running){
    guess = window.prompt(`Enter a number between 1 to 100`);
    guess =  Number(guess);
    
    if(isNaN(guess)){
        window.alert("Kindly enter a valid a number");
    }

    else if(guess < min || guess > max ){
       
        window.alert("Kindly enter the number within range");
    }

    else{
        attempts++;
        if(guess > randomnumber){
            window.alert("Too high try again!!");
        }

        else if(guess < randomnumber){
            window.alert("Too low try again");
        }

        else{
            window.alert(`Correct!! You guessed in ${attempts} attempts`);
            Running = false;
        }
    }

    
}