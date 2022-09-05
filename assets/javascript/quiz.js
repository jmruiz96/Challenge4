var starterButton = document.getElementById("startBtn")
var timerEl = document.getElementById("counter");
var seeCard = document.querySelectorAll(".card-out")
var noSeeCard = document.querySelectorAll(".card-hidden")
var step = "1"
// var timeLeft = 90;

function countdown() {
    var timeLeft = 90;

    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft--;

        if(timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

function next1 () {
    if (step === "1") {
        step = "2"
            if (card )
    }
}


starterButton.addEventListener("click", countdown);
starterButton.addEventListener("click", next1);


// console.log(next1)