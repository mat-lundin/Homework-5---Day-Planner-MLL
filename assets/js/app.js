// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// use moment() to grab day and hour, save to global var
var time = moment().format('dddd - hA');
console.log(time)
$('#currentDay').text(time)
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// html table generator? or create table based on array of objects?
var sched = [
    {
        time: 0900,
        text: ''
    },
    {
        time: 1000,
        text: ''
    },
    {
        time: 1100,
        text: ''
    }
]
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// based on textContent or data-time? compare to time var
// WHEN I click into a timeblock
// THEN I can enter an event
// https://stackoverflow.com/questions/28845037/input-text-value-into-a-div
// event listener on the div that has a key listener loop that appends to .textContent
// WHEN I click the save button for that timeblock
// event listener, match on button, grab class or whatever of button
// THEN the text for that event is saved in local storage
// save entire sched array to local storage
// WHEN I refresh the page
// THEN the saved events persist
// repopulate list/schedule with sched array