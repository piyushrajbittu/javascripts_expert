// Current date
var date = new Date();

// Function to generate calendar
function generateCalendar(month, year) {
  // First day of the month
  var firstDay = new Date(year, month, 1).getDay();
  
  // Number of days in the month
  var daysInMonth = new Date(year, month + 1, 0).getDate();

  // Calendar elements
  var calendar = document.querySelector(".calendar");
  var monthYear = document.querySelector("#month");
  var yearSpan = document.querySelector("#year");
  var days = document.querySelector(".days");

  // Months and weekdays
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Set month and year
  monthYear.innerHTML = months[month];
  yearSpan.innerHTML = year;

  // Clear previous days
  days.innerHTML = "";

  // Add empty cells for the first week
  for (var i = 0; i < firstDay; i++) {
    var li = document.createElement("li");
    li.innerHTML = "";
    days.appendChild(li);
  }

  // Add days to the calendar
  for (var i = 1; i <= daysInMonth; i++) {
    var li = document.createElement("li");
    li.innerHTML = i;
    days.appendChild(li);
  }
}

// Generate current month calendar
generateCalendar(date.getMonth(), date.getFullYear());

// Button events for previous and next month
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", function() {
  date.setMonth(date.getMonth() - 1);
  generateCalendar(date.getMonth(), date.getFullYear());
});

nextBtn.addEventListener("click", function() {
  date.setMonth(date.getMonth() + 1);
  generateCalendar(date.getMonth(), date.getFullYear());
});
