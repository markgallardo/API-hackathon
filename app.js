var category = document.getElementById("category")
var question = document.getElementById("question")
var startGame = document.getElementById("startGame")
var homePage = document.getElementById("homePage")
var questionPage = document.getElementById("question-box")
var questionBox = document.querySelector(".questionBox")
var answerBox = document.querySelector(".answerBox")
var firstBtnClick;
var correctCounter = 0;
var random = Math.floor((Math.random()*100+1))
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
     // randomize the answer
      var answers = data.results[0].incorrect_answers;
      console.table(answers)
      var correctAnswer = data.results[0].correct_answer;
      var randomAnswer = Math.floor(Math.random()* 4) +1;
      console.log(randomAnswer)
      //add the correct answer
      answers.splice(randomAnswer -1, 0 , correctAnswer)
      console.table(answers)
      for( var i = 0; i < answers.length; i++){
        var button = document.createElement("button")
        button.classList.add('choicesBox')
         button.innerHTML = answers[i]
        answerBox.append(button)
      }
      var choicesBox = document.querySelector(".choicesBox")
      console.table(correctAnswer)
      console.log(answerBox)
      //identify if the user choose the right or wrong answer
      answerBox.addEventListener("click", handleClick)
      function handleClick(event){
        console.log(event.target.textContent)
        console.log(correctAnswer)
        if(event.target.innerHTML === correctAnswer){
          correctCounter += 1
          getData()
         console.log(correctCounter)
          // choicesBox = event.target;
          console.log("correct")
          }else{
            console.log("wrong")
          }
        // if(choicesBox === correctAnswer){
        //   console.log("correct")
        // }else{
        //   console.log("wrong")
        // }

      }
    }
  }
