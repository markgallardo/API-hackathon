
$.ajax({
  method: "GET",
  url: "https://opentdb.com/api.php?amount=1&type=multiple",

  success: genrateData,
  error: function () {
    console.log("error")
  }
})

function genrateData(data) {
  console.log(data)
}
