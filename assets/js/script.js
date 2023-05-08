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

var questions = [
    {
        question: "placeholder1",
        answers: ["A", "B", "C", "D"],
        correct: "B"
    },
    {
        question: "placeholder2",
        answers: ["A", "B", "C", "D"],
        correct: "A"
    },
    {
        question: "placeholder3",
        answers: ["A", "B", "C", "D"],
        correct: "C"
    },
    {
        question: "placeholder4",
        answers: ["A", "B", "C", "D"],
        correct: "D"
    }
]

var indexQ = 0 // questions[indexQ]

var startButton = document.getElementById("start");
var startscreen = document.getElementById("startscreen");
var quizpage = document.getElementById("quizpage");
var endpage = document.getElementById("endpage");
var question = document.getElementById("question");
var answer1 = document.getElementById("option-1");
//add
var answer2 = document.getElementById("option-2");
//add
var answer3 = document.getElementById("option-3");
//add event listeners
var answer4 = document.getElementById("option-4");
//add event listers
function startQuiz() {
    startscreen.classList.toggle("inactive")
    quizpage.classList.toggle("inactive")
    displayNextQuestion()
}

function displayNextQuestion() {
    var currentQuestion = questions[indexQ]
    question.textContent = currentQuestion.question
    answer1.textContent = currentQuestion.answers[0]
    answer2.textContent = currentQuestion.answers[1]
    answer3.textContent = currentQuestion.answers[2]
    answer4.textContent = currentQuestion.answers[3]
}


startButton.addEventListener("click", startQuiz);

//event listernrs go bottom