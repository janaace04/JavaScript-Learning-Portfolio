const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("What is your Name: ",(name) =>{
    console.log(`Hi ${name}`);
    r1.close();
});