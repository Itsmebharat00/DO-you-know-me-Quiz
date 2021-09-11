var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("Whats ur Name? ") 

console.log("Welcome " + userName + " Do you know Bharat? ");

function play (question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are right");
      score = score + 1;
  } else {
    console.log("You are wrong")

  }
  console.log("Current score ", score);
  console.log("----------------");
}

 var questions = [{

     question: "Which phone brand i don't like? ",   
     answer: "Iphone",
   }, {
     question: "whats my favourite superhero? ",
     answer: "Flash"
     
     }, {
       question: "Whats my favourite color? ",
       answer: "Blue"
     },  {
       question: "DO i like monsoon season? ",
       answer: "No"
     }, {
       question: "favourite Non-veg food? ",
       answer: "Seafood"
     }
 ]

 for (var i=0; i<questions.length; i++){
   var currentQuestion = questions[i];
   play(currentQuestion.question, currentQuestion.answer);

 }

console.log("Great! you scored " + score );
