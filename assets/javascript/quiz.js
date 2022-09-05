var starterButton = document.getElementById("startBtn")
var timerEl = document.getElementById("counter");


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
var qPage = document.getElementById("questionPage")
function next1 () {
    qPage.setAttribute("display", "block");
}


starterButton.addEventListener("click", countdown);
starterButton.addEventListener("click", next1);


// console.log(next1)