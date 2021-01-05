var category = document.getElementById("category")
var question = document.getElementById("question")
var startGame = document.getElementById("startGame")
var homePage = document.getElementById("homePage")
var questionPage = document.getElementById("question-box")
var questionBox = document.querySelector(".questionBox")
var answerBox = document.querySelector(".answerBox")
var firstBtnClick;
var correctCounter = null;
var random = Math.floor((Math.random() * 100 + 1))
var correctAnswer;
startGame.addEventListener('click', getData)
// $.ajax({
//   method:"GET",
//   url:"https://rickandmortyapi.com/api/character/"+ random +"/",
//   success: function(data){
//       console.log(data)
//       console.log(data.image)
//   },
//   error: console.error
// })
function getData() {
  homePage.classList.add("hidden")
  questionPage.classList.remove("hidden")
  $.ajax({
    method: "GET",
    url: "https://opentdb.com/api.php?amount=1&type=multiple",
    success: function (data) {
      renderData(data)
      console.log("fetch data:", data)
    },
    error: function (data) {
      console.error(error)
    }
  });
}
function reset() {
  answerBox.innerHTML = "";
  getData();

}
function handleClick(event) {
  console.log("event.target.textContent:", event.target.textContent)
  console.log("correctAnswer:", correctAnswer)
  if (event.target.innerHTML === correctAnswer) {
    correctCounter++
    correctAnswerEffect()

    console.log(questionBox)
    console.log("correct")

  } else {
    console.log("wrong")
    correctCounter = 0
  }
  console.log('correct counter:', correctCounter)
}
function renderData(data) {
  // console.log(data)
  category.innerHTML = data.results[0].category;
  question.innerHTML = data.results[0].question;
  // randomize the answer
  var answers = data.results[0].incorrect_answers;
  console.table('answers:', answers)
  correctAnswer = data.results[0].correct_answer;
  var randomAnswer = Math.floor(Math.random() * 4) + 1;
  console.log('randomAnswer:', randomAnswer)
  //add the correct answer
  answers.splice(randomAnswer - 1, 0, correctAnswer)
  console.table('answers:', answers)
  for (var i = 0; i < answers.length; i++) {
    var button = document.createElement("button")
    button.classList.add('choicesBox')
    button.textContent = answers[i]
    answerBox.append(button)
  }
  var choicesBox = document.querySelector(".choicesBox")
  console.table('correctAnswer:', correctAnswer)
  console.log('answerBox:', answerBox)
  //identify if the user choose the right or wrong answer
  answerBox.addEventListener("click", handleClick)
}
 //correct answer effect
 function correctAnswerEffect(){
  questionBox.style.backgroundColor = 'green'
   setTimeout(function(){
     questionBox.style.backgroundColor ='orange'
     reset();
    },800)
 }
