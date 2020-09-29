var category = document.getElementById("category")
var question = document.getElementById("question")
var startGame = document.getElementById("startGame")
var homePage = document.getElementById("homePage")
var questionPage = document.getElementById("question-box")
var answerA = document.getElementById("answerA")
var answerB = document.getElementById("answerB")
var answerC = document.getElementById("answerC")
var answerD = document.getElementById("answerD")
var questionBox = document.querySelector(".questionBox")


startGame.addEventListener('click', getData)



function getData(){
 homePage.classList.add("hidden")
 questionPage.classList.remove("hidden")
  $.ajax({
      method: "GET",
    url: "https://opentdb.com/api.php?amount=1&type=multiple",
      success:function(data){
       renderData(data)
        console.log(data)},

     error: function (data){
        console.error(error)
      }
  });
  //render data
  function renderData(data){
    console.log(data)
    category.innerHTML = data.results[0].category;
    question.innerHTML = data.results[0].question;
    console.log(data.results[0].category)
    // answerA.innerText = "A: " + data.results[0].correct_answer;
    // answerB.innerText = "B: " + data.results[0].incorrect_answers[0]
    // answerC.innerText = "C: " + data.results[0].incorrect_answers[1]
    // answerD.innerText = "D: " + data.results[0].incorrect_answers[2]

    // randomize the answer
    var answers = data.results[0].incorrect_answers;
    var correctAnswer = data.results[0].correct_answer;
    var randomAnswer = Math.floor(Math.random()*3) + 1;
    //add the correct answxer
    answers.splice(randomAnswer -1, 0 , correctAnswer)
    for( var i = 0; i < answers.length; i++){
      var button = document.createElement("button")
      button.classList.add('choicesBox')
      button.innerHTML = answers[i]
      questionBox.append(button)
    }

    console.log(correctAnswer)
  }
}
