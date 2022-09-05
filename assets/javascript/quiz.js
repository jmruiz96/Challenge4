var starterButton = document.getElementById("startBtn")
var timerEl = document.getElementById("counter");


var timeLeft = 90;

function countdown() {
    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft--;

        if(timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

starterButton.addEventListener("click", countdown(), 
    if (section.hasAttribute)