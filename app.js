var category = document.getElementById("category")
var question = document.getElementById("question")
var startGame = document.getElementById("startGame")
var homePage = document.getElementById("homePage")
var questionPage = document.getElementById("question-box")
var questionBox = document.querySelector(".questionBox")
var answerBox = document.querySelector(".answerBox")

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

    // randomize the answer
    var answers = data.results[0].incorrect_answers;
    var correctAnswer = data.results[0].correct_answer;
    var randomAnswer = Math.floor(Math.random()*4) + 1;
    console.log(randomAnswer)
    //add the correct answer
    answers.splice(randomAnswer -1, 0 , correctAnswer)
    console.log(correctAnswer)
    for( var i = 0; i < answers.length; i++){
      var button = document.createElement("button")
      button.classList.add('choicesBox')
      button.innerHTML = answers[i]
      answerBox.append(button)
    }
    var answerBtn = document.querySelector("button")
    answerBox.addEventListener("click", event)
    function event(){
      if(event.target == correctAnswer){
        console.log("correct")
      }else if (event.target = answers){
        console.log(answers)
        console.log("wrong")
      }
    }
  }
}
