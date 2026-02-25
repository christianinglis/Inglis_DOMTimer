let timer = 0;
let intervalID = null;

const display = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startTimer");
console.log(document.querySelectorAll('input'))
console.log(startBtn)
const stopBtn = document.getElementById("stopTimer");
const resetBtn = document.getElementById("resetTimer");

startBtn.addEventListener("click", function() {

    if(intervalID === null) {
        intervalID = setInterval(function() {
            timer++;
            display.innerHTML = timer;
        }, 1000);
    }
});

stopBtn.addEventListener("click", function() {
    clearInterval(intervalID);
    intervalID = null;
});

resetBtn.addEventListener("click", function() {
    clearInterval(intervalID);
    intervalID = null;
    timer = 0;
    display.innerHTML = timer;
});
