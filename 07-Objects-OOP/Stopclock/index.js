let timer = null;
const display = document.getElementById("display");
let starttime = 0;
let elapsedtime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        starttime = Date.now() - elapsedtime;
        clearInterval(timer);
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    starttime = 0;
    elapsedtime = 0;
    isRunning = false;
    display.textContent = `00:00:00:00`
}

function update(){
    let currenttime = Date.now();
    elapsedtime = currenttime - starttime;

    let hour = Math.floor(elapsedtime/(1000 * 60 * 60));
    let min = Math.floor(elapsedtime/(1000 * 60) % 60);
    let secs = Math.floor(elapsedtime/1000 % 60);
    let milli = Math.floor(elapsedtime % 1000/10);
    hour = String(hour).padStart(2, 0);
    min = String(min).padStart(2, 0);
    secs = String(secs).padStart(2, 0);
    milli = String(milli).padStart(2, 0);
    display.textContent = `${hour}:${min}:${secs}:${milli}`;
}