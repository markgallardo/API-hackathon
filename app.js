class App{
  constructor(getQuestion){
    this.getQuestion = getQuestion
    this.handleGetQuestionSuccess = this.handleGetQuestionSuccess.bind(this)
    this.handleGetQuestionError = this.handleGetQuestionError.bind(this)
  }
  handleGetQuestionSuccess(){
    console.log(result)
  }
  handleGetQuestionError(){
    console.log(error)
  }
}

  $.ajax({
    method: "GET",
    url: "https://opentdb.com/api.php?amount=1&type=multiple",
    success: this.handleGetQuestionSuccess,
    error: this.handleGetQuestionError
  });
console.log(result)
