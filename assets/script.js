// TO DO: Start button that I can click to start the quiz 
var startQuiz = document.querySelector("#start-button");
var nextQuestion = document.querySelector("#next-question");
// var ansEl = document.querySelector("#page-form-answer");
// setInterval to do countdown (global?)
var timerEl = document.getElementById('countdown');
//var questionArrayElement = getElementById('page-form-question');
// timer for game 
countdown();
//var formEl = document.querySelector("#questions-to-answer")
setTimeout(function () {
    var initialPrompt = document.querySelector("#page-form-question");
    var promptCommand = document.createElement("p");
    promptCommand.textContent = "Are you a true Beatles fan? Do you think you have what it takes to reach the ultimate high score? Be cautious! Get the answer wrong and your time will be reduced by ten seconds. ";
    promptCommand.className = "page-form";
    initialPrompt.append(promptCommand);
}, 1000);


// TODO: listening events for starting quiz (on click)
var startTheQuiz = function (event) {
    // start the quiz 
    var questionEl = event.target;
    // when start button is clicked 
    if (questionEl.matches(".btn")) {
        var firstEl = document.querySelector("#page-form-question");
        firstEl.textContent = "How many studio albums did The Beatles release?";
        firstEl.className = "page-form";
        var answerEl = document.querySelector("#answer-list-responses");
        answerEl.textContent = "A. 21";
        answerEl.className = "list-group";
    }
};

function totalQuestionList (event) {
    var questionChoices = [questions];
    for (var i = 0; i < questionChoices.length; i++) {
        var secondEl = document.querySelector("#page-form-question");
        secondEl.textContent = "How many members are in The Beatles?";
        secondEl.className = "page-form";
        var answerTwoEl = document.querySelector("#answer-list-responses");
        var answerTwoEl = document.createElement("button");
        answerTwoEl.textContent = "C. 4";
        answerTwoEl.className = "list-group";
    };
    for (var i = 0; i < questionChoices.length; i++) {
        var thirdEl = document.querySelector("#page-form-question");
        thirdEl.textContent = "Which Beatles member plays the bass?";
        thirdEl.className = "page-form";
        var answerThreeEl = document.querySelector("#answer-list-responses");
        var answerThreeEl = document.createElement('button');
        answerThreeEl.textContent = "D. Paul";
        answerThreeEl.className = "list-group";
    };
    endGame();
    };


var questions = [
    {
        question: "How many studio albums did The Beatles release?",
        a: "21",
        b: "19",
        c: "12",
        d: "32",
        correct: "a",
    },
    {
        question: "How many members are in The Beatles?",
        a: "2",
        b: "6",
        c: "4",
        d: "3",
        correct: "c",
    },
    {
        question: "Which Beatles member plays the bass?",
        a: "John",
        b: "George",
        c: "Ringo",
        d: "Paul",
        correct: "d",
    },
    {
        question: "Which Beatles song holds the record for the most versions covered by other artists?",
        a: "Let It Be",
        b: "Yesterday",
        c: "Come Together",
        d: "Eight Days A Week",
        correct: "b",
    },
    {
        question: "Which song contributed to the rumor that Paul had died?",
        a: "Paul is Dead",
        b: "Love Me Do",
        c: "Strawberry Fields Forever",
        d: "The Long & Winding Road",
        correct: "c",
    },
];


// TODO: timer starts when I see first question 
function countdown() {
    var timeLeft = 90;

    var timeInterval = setInterval(function () {
        // as long as time left is gerater than 1 
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
};
 
// listening event for user selecting answer from the choices 
// TODO: if I answer correct I am presented with another question
// TODO: add score if they got it right (localstorage.set)
// do not deduct penalty time 
// TODO: remove time if I get it wrong (10 sec)
// alert! incorrect!
//- move to next question but dont count as correct 
// keep track of # correct 
// TODO: stop game when all are answered or timer reaches 0 
var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your name?");
    }
};

var playerInfo = {
    name: getPlayerName(),
}
// TODO: save user score 
var endGame = function () {
var highScore = localStorage.getItem("highscore");
if (highScore === null) {
    highScore = 0;
}
if (countdown > highScore) {
    localStorage.setItem("highscore", countdown);
    localStorage.setItem("name", playerInfo.name);
}
};
// TODO: ask user for initials to save 




// TODO: add event listeners 
startQuiz.addEventListener("click", startTheQuiz);
nextQuestion.addEventListener("click", totalQuestionList);