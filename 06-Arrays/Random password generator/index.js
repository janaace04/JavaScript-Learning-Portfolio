function generateRandomPass(length, uppercase, lowecase, symbol, number){

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_-+=";

    let include = "";
    let pass = "";

    include += uppercase ? upper : "";
    include += lowecase ? lower : "";
    include += number ? numbers : "";
    include += symbol ? symbols : "";
    
    if(length <= 0){
        console.log("Length must be atleast 1");
    }

    else if(include.length == 0){
        console.log("Atleast choose one option");
    }

    else{
        for(let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * include.length);
            pass += include[randomIndex];
        }
    }

    return pass;

}

const passLength = 10;
const uppercase = false;
const lowercase = false;
const symbol = false;
const number = true;

const password = generateRandomPass(passLength, uppercase, lowercase, symbol, number);


console.log(password);