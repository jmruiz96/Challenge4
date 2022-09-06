var starterButton = document.getElementById("startBtn");
var timerEl = document.getElementById("counter");
var visCard = document.querySelectorAll(".card-out");
var invisCard = document.querySelectorAll(".card-hidden");
var sectionOne = document.getElementById("startPage");
var sectionTwo = document.getElementById("questionPage");
var sectionThree = document.getElementById("submissionPage");
// var timeLeft = 90;

function countdown() {
    var timeLeft = 90;

    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft--;

        if(timeLeft < 0) {
            clearInterval(timeInterval);
            if (step === "two") {
                step = "three";
                sectionTwo.setAttribute("class", "card-hidden");
                sectionThree.setAttribute("class", "car-out");
            }
        }
    }, 1000);
}
var step = "one"

// function next1 () {
//     if (step === "one") {
//         step = "two"
//         noSeeCard.setAttribute("class", "card-out"); 
//     }
// }


starterButton.addEventListener("click", countdown);
starterButton.addEventListener("click", function() {
    if (step === "one") {
        step = "two";
        sectionOne.setAttribute("class", "card-hidden");
        sectionTwo.setAttribute("class", "card-out") 
    }
} );


// console.log(next1)
