var questionBox = document.getElementById("questionBox")

for (var i = 0; i < result.length; i++) {
  var h4category = document.createElement("h4")
  h4category.textContent = "Category:"

  var categorySpan = document.createElement("span")
  categorySpan.textContent = result[i].['category'];

  var h4question = document.createElement("h4")
  h4question.textContent = "Question:"

  var questionSpan = document.createElement("span")
  questionSpan.textContent = result[i].['question'];
