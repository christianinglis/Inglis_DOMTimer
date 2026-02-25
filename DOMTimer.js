let timer = 0;
let intervalID = null;

const display = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startTimer");
const stopBtn = document.getElementById("stoptTimer");
const resetBtn = document.getElementById("resetTimer");

startBtn.addEventListener("click", function(){

    if(intervalID == null) {
        intervalID == setInterval(function() {
            timer++;
            display.innerHTML = timer;
        }, 1000);
    }
});
