// set variable for current date and time
var tenet = dayjs();

console.log(tenet);
// set var to format current date displayed at top of page
var todaysDate = tenet.format('dddd, MMMM D, YYYY');
// set var for the current hour to adjust color coding
var currentHour =  dayjs().hour()
console.log(currentHour,"Hour")
$('#currentDay').text(todaysDate);

// blank array to store the tasks for each hour
var allTasks = ['', '', '', '', '', '', '', ''];



$(function () {
  $(".saveBtn").on("click",function(){
    var userEntry = $(this).siblings("textarea").val()
    var timeBlk = $(this).parent().attr("id")
    console.log(userEntry,timeBlk)
    localStorage.setItem(timeBlk, userEntry);

  })
    
  for (var i = 9; i<=17;i++){
    var localSaved = localStorage.getItem("hour-"+i)
    $("#hour-"+i).children("textarea").val(localSaved)
    if(i<currentHour){
      $("#hour-"+i).children("textarea").addClass("past")
    }else if(i===currentHour){
      $("#hour-"+i).children("textarea").addClass("present")
    }else{
      $("#hour-"+i).children("textarea").addClass("future")
    }
  }
  // TODO: Add a listener for click events on the save button. This code should...........
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener

  // test comment to verify push...

  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
