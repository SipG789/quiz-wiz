// TO DO: Start button that I can click to start the quiz 
var startQuiz = document.querySelector("#start-button");
// setInterval to do countdown (global?)
var timerEl = document.getElementById('countdown');

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
        //   window.confirm("You are about to begin the quiz! Are you ready?");
        var firstEl = document.querySelector("#page-form-question");
        firstEl.textContent = "How many studio albums did The Beatles release?";
        firstEl.className = "page-form";
        return questionEl;
    };
};

// TODO: Display question and answers
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
}
// TODO: list of questions and answers (know which one is correct.... if else ??) 
// listening event for user selecting answer from the choices 
// TODO: if I answer correct I am presented with another question
// TODO: add score if they got it right (localstorage.set)
// do not deduct penalty time 
// TODO: remove time if I get it wrong (10 sec)
// alert! incorrect!
//- move to next question but dont count as correct 
// keep track of # correct 
// TODO: stop game when all are answered or timer reaches 0 
// TODO: save user score 
// TODO: ask user for initials to save 




// TODO: add event listeners 
//formEl.addEventListener("submit", nextQuestion);
startQuiz.addEventListener("click", startTheQuiz);
