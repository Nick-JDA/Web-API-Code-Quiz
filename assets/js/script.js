//quiz loop
    //title card with description and start quiz button
        //example from activity 11...
            // Access toggle switch HTML element
// var themeSwitcher = document.querySelector("#theme-switcher");
// var container = document.querySelector(".container");

// Set default mode to dark
// var mode = "dark";

//  Listen for a click event on toggle switch
// themeSwitcher.addEventListener("click", function() {                                    
//    If mode is dark, apply light background
//   if (mode === "dark") {
//     mode = "light";
//     container.setAttribute("class", "light");
//   }
//    If mode is light, apply dark background 
//   else {
//     mode = "dark";
//     container.setAttribute("class", "dark");
//   }
// });

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

        //75 second timer starts on start quiz button push
            //example from activity 09...
//             var secondsLeft = 10;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";             

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// };

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

        //first question is shown with possible answers
            //example from activity 20...
//             var container = document.querySelector(".container");

// container.addEventListener("click", function(event) {
//   var element = event.target;

//   if (element.matches(".box")) {
//     var state = element.getAttribute("data-state");

//      Use an if statement to conditionally render the number on the card
//     if (state === "hidden") {
//        If the card is clicked while the state is "hidden", we set .textContent to the number 
//       element.textContent = element.dataset.number;
//        Using the dataset property, we change the state to visible because the user can now see the number
//       element.dataset.state = "visible";
   
//     } else {
//        'Hide' the number by setting .textContent to an empty string
//       element.textContent= "";
//        Use .setAttribute() method
//       element.setAttribute("data-state", "hidden")
     
//     }  
//   }
  
// });

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

            //user answers and next question is shown
                //if correct answer, message at bottom of question card states correct and no timer change
                //if incorrect answer, message at bottom of question card states incorrect and timer is subtracted from ex -20 seconds

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

            //after last question is asked timer stops

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

                //card with title saying "all done" appears 
                //initial entry form with score displayed and submit button to record score and initials of user

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

            //once score submit button pressed switch to Highscore card that has list of all scores and initials

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

                //button with "clear highscores" displayed
                    //upon press highscore list is cleared

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

                //button with "go back" is displayed
                    //upon press user is brought back to title card
    //loop restarts

var questions = [                                                               // creates variables that represents the questions as objects in an array 
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["1. strings", "2. boolean", "3. alerts", "4. numbers"],
        correct: "3. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answers: ["1. parentheses", "2. curly brackets", "3. quotes", "4. square brackets"],
        correct: "1. parentheses"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correct: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correct: "4. console.log"
    }
]

//couldn't get score saving to work but here's some commented code :)

// var initial = document.getElementById("initials");

// var initialScore = {
//     initial: initial.value,
//     score: timeEl.value
// };

// localStorage.setItem("initialScore", JSON.stringify(initialScore));

var indexQ = 0 // questions[indexQ]

var end = false;

var scoreNum = document.getElementById("scoreNum");

var startButton = document.getElementById("start");

var startscreen = document.getElementById("startscreen");

var quizpage = document.getElementById("quizpage");

var endpage = document.getElementById("endpage");

var question = document.getElementById("question");

var timeEl = document.getElementById("time");

var secondsLeft = 75;

var answer1 = document.getElementById("option-1");

var answer2 = document.getElementById("option-2");

var answer3 = document.getElementById("option-3");

var answer4 = document.getElementById("option-4");

function startQuiz() {                                     //function that starts quiz by hiding the start page and showing the quizpage, starting the timer, and displaying first question 
    startscreen.classList.toggle("inactive")
    quizpage.classList.toggle("inactive")
    startTimer()

    question.textContent = questions[0].question
    answer1.textContent = questions[0].answers[0]
    answer2.textContent = questions[0].answers[1]
    answer3.textContent = questions[0].answers[2]
    answer4.textContent = questions[0].answers[3]
}

function startTimer() {                                    //function that operates the timer and gives perameters for if the quiz ends/if the time runs out
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }

        if (secondsLeft > 0 && end == true) {
            scoreNum = secondsLeft;
            timeEl.textcontent = scoreNum;
            clearInterval(timerInterval);
        }
    }, 1000);
}

function displayNextQuestion() {                            // displayNextQuestion function that shows the next question with it's proper answers and questions
    indexQ ++;                                               
    var currentQuestion = questions[indexQ]
    if (indexQ > 3) {
        end = true;
        endQuiz()
    }
    question.textContent = currentQuestion.question
    answer1.textContent = currentQuestion.answers[0]
    answer2.textContent = currentQuestion.answers[1]
    answer3.textContent = currentQuestion.answers[2]
    answer4.textContent = currentQuestion.answers[3]
}

 function checkAnswer(selectedAnswer) {                     //function that gives a console log for if the question is correct or incorrect and if incorrect gives time penalty of 15 seconds
    console.log(selectedAnswer);
    if (selectedAnswer === questions[indexQ].correct) {
        console.log('correct');
    } else {
        console.log('incorrect');
        secondsLeft -= 15;
    }
 }

function endQuiz() {                                         // endQuiz function that hides the quizpage and shows the endpage
    quizpage.classList.toggle("inactive")
    endpage.classList.toggle("inactive")
    timeEl.textcontent = " ";
    var scoreEl = document.getElementById("time");
    scoreEl.setAttribute("timeEl.textContent", "secondsLeft");
}

startButton.addEventListener("click", startQuiz);            // Event listener for when start button is clicked then the startQuiz function is called    
answer1.addEventListener("click", function(event) {
    checkAnswer(event.target.textContent);
    displayNextQuestion();
});                                                          // Event listener for when one of the answers is clicked then the displayNextQuestion function is called
answer2.addEventListener("click", function(event) {
    checkAnswer(event.target.textContent);
    displayNextQuestion();
});                                                          // Event listener for when one of the answers is clicked then the displayNextQuestion function is called
answer3.addEventListener("click", function(event) {
    checkAnswer(event.target.textContent);
    displayNextQuestion();
});                                                          // Event listener for when one of the answers is clicked then the displayNextQuestion function is called
answer4.addEventListener("click", function(event) {
    checkAnswer(event.target.textContent);
    displayNextQuestion();
});                                                          // Event listener for when one of the answers is clicked then the displayNextQuestion function is called
//event listeners go bottom

