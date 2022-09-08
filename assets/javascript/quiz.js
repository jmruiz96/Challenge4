var starterButton = document.getElementById("startBtn");
var timerEl = document.getElementById("counter");
var visCard = document.querySelectorAll(".card-revealed");
var invisCard = document.querySelectorAll(".card-hidden");
var sectionOne = document.getElementById("startPage");
var sectionTwo = document.getElementById("questionPage");
var sectionThree = document.getElementById("submissionPage");
var quizQ = document.getElementById("question");
var answers = document.getElementById("answers");
var qIndex = 0;
var resultEl = document.getElementById("finalScore");
var timeLeft = 90;
var rightOrWrong = document.getElementById("rightOrWrong")
var qArr = [
    {
        questionOb: "Where should the link to Javascript be located in an HTML file?",
        possibleA: [ "Above the head ", "In the head", "Inside and at the bottom of the body", "Inside and at the top of the body", ],
        rightA: "Inside and at the bottom of the body",
    },

    {
        questionOb: "Which operator means not equal to?",
        possibleA: [ " = ", " == ", " === ", "!=" ],
        rightA: "!="
    },

    { 
        questionOb: "What do we use to store groups of data in a single variable?",
        possibleA: ["Method", "Array", "Container", "Div"],
        rightA: "Array"
    },

    {
        questionOb: "A very useful method used during development and debugging for printing content in dev tools",
        possibleA: ["this ", "For Loops", "Javascript", "Console.log"], 
        rightA: "Console.log"
    },

    {
        questionOb: "When is the local storage data cleared?",
        possibleA: ["On computer restart", "On page reload", "On browser close", "No expiration time"], 
        rightA: "No expiration time"
    },
]; 
//changed wrongAs to possibleA and question to questionOb

// sectionTwo.children[0].textContent = (qArr[0]["question"])
// sectionTwo.children[1].children[0].textContent = (qArr[0].possibleA[0])
// sectionTwo.children[1].children[1].textContent = (qArr[0].possibleA[1])
// sectionTwo.children[1].children[2].textContent = (qArr[0].possibleA[2])
// sectionTwo.children[1].children[3].textContent = (qArr[0].possibleA[3])

// var index = 0;
// var currentQ;

// function navigate(next) {
//     index = index + next;
//     if (index < 0) {
//         index = qArr.length - 1;
//     } else if ( index > qArr.length -1) {
//         index = 0;
//     }
//     currentQ = qArr[index];
//     sectionTwo.children[0].textContent = (qArr[index]["question"]);
//     sectionTwo.children[1].children[0].textContent = (qArr[index].possibleA[0]);
//     sectionTwo.children[1].children[1].textContent = (qArr[index].possibleA[1]);
//     sectionTwo.children[1].children[2].textContent = (qArr[index].possibleA[2]);
//     sectionTwo.children[1].children[3].textContent = (qArr[index].possibleA[3]);
// };

// function pickingA (event) {
//     event.currentTarget.setAttribute()
// }
// all this just not working starting over with showQuestions function.


function countdown() {
   
    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft--;


        if(timeLeft < 0) {
            clearInterval(timeInterval);
            // if (step === "two") {
            //     step = "three";
            // not needed
        //         sectionTwo.setAttribute("class", "card-hidden");
        //         sectionThree.setAttribute("class", "car-revealed");
        //     // }
        }
    }, 1000);
    // navigate(0); not going this route going to make a display q function
    showQuestions();
};
var currentQ = qArr[qIndex];
function showQuestions() {
    var currentQ = qArr[qIndex];
    sectionOne.setAttribute("class", "card-hidden");
    sectionTwo.setAttribute("class", "car-revealed");
    quizQ.textContent = currentQ.questionOb;
    answers.innerText = "";
    for (var i = 0; i < currentQ.possibleA.length; i++){
        var answerBtn = document.createElement("button");
        answerBtn.setAttribute("class", "btn");
        answerBtn.textContent = currentQ.possibleA[i];
        answers.appendChild(answerBtn);
    };
};

var answerEl = document.getElementById("answers");
answerEl.addEventListener("click", function pickAnswer(e){
    console.log(e.target.textContent)
    console.log(qArr[qIndex].rightA)
    if (e.target.textContent === qArr[qIndex].rightA){
        timeLeft +=5;
        rightOrWrong.textContent = "That answer was correct :)";
    } else {
        timeLeft -=8;
        rightOrWrong.textContent = "That answer was wrong :(";
    }
    // e.preventDefault();
    // var userPick = e.target.textContent;
    // var question = qArr[qIndex];
    // var correct = question.possibleA[question.rightA];

    // if (userPick === correct) {
    //     timeLeft +=5;
    //     rightOrWrong.textContent = "Correct :)"


    // } else {
    //     timeLeft -=8;
    //     rightOrWrong.textContent = "Wrong :(";
    // }

    
    qIndex++

    var timerId;
    if (qIndex === qArr.length) {
        clearTimeout(timerId);
        return showScore();
    }
    setTimeout(showQuestions, 500)
});


function showScore() {
    sectionTwo.setAttribute("class", "card-hidden");
    sectionThree.setAttribute("class", "car-revealed");
    resultEl.style.display = "block";
    if (timeLeft < 0 ) {
        resultEl.textContent = "0"
    } else {
        resultEl.textContent = timeLeft
    }
};





// answer.addEventListener("click", function(event){
//     event.stopPropigatiion();
//     navigate(1)

// });


var submitBtn = document.getElementById("submit");
var inputEl = document.getElementById("initials");

submitBtn.addEventListener("click", function saveScore(e){
    e.preventDefault();
    var initials = inputEl.value.trim();
    if (initials === "") {
        alert("Don't you want to let the world know who got that score?")
        return "";
    }

    var highscores; 
    if (JSON.parse(localStorage.getItem("highScores")) !=null) {
        highscores = JSON.parse(window.localStorage.getItem(highscores));
     } else {
        highscores = [];
     } 
    var score = {
        initials: initials,
        highscores: timeLeft,
    };
    highscores.push(score);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    location.href= "scoreboard.html";
    saveScore();
});

// var step = "one"
// not needed


// starterButton.addEventListener("click", function() {
//     if (step === "one") {
//         step = "two";
//         sectionOne.setAttribute("class", "card-hidden");
//         sectionTwo.setAttribute("class", "card-revealed") 
//     }
// } );
// not needed;
starterButton.addEventListener("click", countdown);