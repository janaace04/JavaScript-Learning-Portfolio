function Rolldice(){
    const Dices = document.getElementById("Numberofdice").value;
    const ResultDice = document.getElementById("ResultDice");
    const ResultImages = document.getElementById("ResultImages");
    const values = [];
    const images = [];

    for(let i = 0;i<Dices; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src = "dice_images/${value}.png">`);
    }

    ResultDice.textContent = `Dice: ${values.join(', ')}`;
    ResultImages.innerHTML = images.join('');
}