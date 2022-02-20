var today = moment();
var currentHour = parseInt(today.format("H"));
var saveButton = $("button");
var input = $("input");
var calendarHour = input.attr("name");

// stores inputs in local storage with keys equal to time
function saveInput() {
  var userInput = $(this).parent().parent().find("input").val();
  var UserInputTime = $(this).parent().parent().find("input").attr("name");
  localStorage.setItem(UserInputTime, userInput);
}

// sets current date
$("#currentDay").text(today.format("dddd, MMM Do"));

// checks storage for each input and sets if available. checks current time vs time on page and sets class.
input.each(function () {
  var inputTime = parseInt($(this).attr("name"));
  var userSaved = localStorage.getItem($(this).attr("name"));
  if (userSaved !== null) {
    $(this).val(userSaved);
  }
  if (currentHour > inputTime) {
    $(this).addClass("past");
  } else if (currentHour == inputTime) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

// event listener for button click
saveButton.on("click", saveInput);
