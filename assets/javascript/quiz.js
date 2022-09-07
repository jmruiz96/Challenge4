var starterButton = document.getElementById("startBtn");
var timerEl = document.getElementById("counter");
var visCard = document.querySelectorAll(".card-revealed");
var invisCard = document.querySelectorAll(".card-hidden");
var sectionOne = document.getElementById("startPage");
var sectionTwo = document.getElementById("questionPage");
var sectionThree = document.getElementById("submissionPage");
var quizQ = document.getElementById("question")
var guessOne = document.getElementById("answer1")
// var correctGuess = qArr.querySelector(".correct")
// var incorrectGuess = qArr.querySelector(".incorrect")

var qArr = [
    {
        question: "Where should the link to Javascript be located in an HTML file?",
        wrongAs: [ "Above the head ", "In the head", "Inside and at the top of the body"],
        rightA: "Inside and at the bottom of the body",
    },

    {
        question: "Which operator means not equal to?",
        wrongAs: [ " = ", " == ", " === " ],
        rightA: " != "
    },

    { 
        question: "What do we use to store groups of data in a single variable?",
        wrongAs: ["Method", "Container", "Div"],
        rightA: "Array",
    },
]; 
console.log(qArr[0]["question"]);

sectionTwo.children[0].textContent = (qArr[0]["question"])
sectionTwo.children[1].children[0].textContent = (qArr[0].wrongAs[0])
sectionTwo.children[1].children[1].textContent = (qArr[0].wrongAs[1])
sectionTwo.children[1].children[2].textContent = (qArr[0].wrongAs[2])
sectionTwo.children[1].children[3].textContent = (qArr[0]["rightA"])

var index =0;
var currentQ;

function navigate(direction) {
    index = index + direction;
    if (index <0) {
        index = qArr.length - 1;
    } else if ( index > qArr.length -1) {
        index = 0;
    }
    currentQ = qArr[index];
    sectionTwo.children[0].textContent = (currentQ["question"])
    sectionTwo.children[1].children[0].textContent = (currentQ.wrongAs[0])
    sectionTwo.children[1].children[1].textContent = (currentQ.wrongAs[1])
    sectionTwo.children[1].children[2].textContent = (currentQ.wrongAs[2])
    sectionTwo.children[1].children[3].textContent = (currentQ["rightA"])
};

function countdown() {
    var timeLeft = 9;

    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft--;


    sectionOne.setAttribute("class", "card-hidden");
    sectionTwo.setAttribute("class", "card-revealed");
                 
        if(timeLeft < 0) {
            clearInterval(timeInterval);
            // if (step === "two") {
            //     step = "three";
            // not needed
                sectionTwo.setAttribute("class", "card-hidden");
                sectionThree.setAttribute("class", "car-revealed");
            // }
        }
    }, 1000);
}
// var step = "one"
// not needed



starterButton.addEventListener("click", countdown);
// starterButton.addEventListener("click", function() {
//     if (step === "one") {
//         step = "two";
//         sectionOne.setAttribute("class", "card-hidden");
//         sectionTwo.setAttribute("class", "card-revealed") 
//     }
// } );
// not needed


