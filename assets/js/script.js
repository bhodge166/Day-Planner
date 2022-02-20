var today = moment();
var currentHour = today.format("H");
var saveButton = $("button");
var input = $("input");
var calendarHour = input.attr("name");
var savedInput = localStorage.getItem("userInput");

function saveInput() {
  localStorage.setItem("userInput", input.val());
}

$("#currentDay").text(today.format("dddd, MMM Do"));

saveButton.on("click", saveInput);

input.each(function () {
    if (currentHour > $(this).attr("name")) {
      $(this).addClass("past")
    }
    if (currentHour === $(this).attr("name")) {
      $(this).addClass("present")
    }
    if (currentHour < $(this).attr("name")) {
      $(this).addClass("future")
    }
});

console.log(savedInput)
input.val(savedInput)