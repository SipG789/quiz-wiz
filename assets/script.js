// TO DO: Start button that I can click to start the quiz 
var startQuiz = document.querySelector("#start-button");
//var formEl = document.querySelector("#questions-to-answer")

// TODO: listening events for starting quiz (on click)
var startTheQuiz = function (event) {
    var quizOneEl = event.target;

    quizOneEl.addEventListener("click", function() {
        var questionOneEl = document.querySelector("#page-form-question");
        var questionListEl = document.createElement("p");
        questionListEl.textContent = "Are you a true Beatles fan? Do you think you have what it takes to reach the ultimate high score? Be cautious! Get the answer wrong and your time will be reduced by ten seconds. ";
        questionListEl.className = "page-form";
        questionOneEl.appendChild(questionListEl);
        });
    // start the quiz 
    var beginQuizEl = event.target;
        alert("Quiz is about to begin!");
    // when start button is clicked 
    if (beginQuizEl.matches(".btn")) {
     //   window.confirm("You are about to begin the quiz! Are you ready?");
    }
    beginQuizEl.addEventListener("click", function() {
      
        var firstQuestionEl = document.querySelector("#page-form-question");
        var firstListEl = document.createElement("div");
        firstListEl.textContent = "How many studio albums did The Beatles release?";
        firstListEl.className = "page-form";
        firstQuestionEl.appendChild(firstListEl);
        });

    // var questionOneEl = document.createElement("li");
    // questionOneEl.className = "list-item";
    // questionOneEl.setAttribute("questions-to-answer");
    // console.log("This is question one");
};
// TODO: timer starts when I see first question 
    // setInterval to do countdown (global?)
// TODO: Display question and answers

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
