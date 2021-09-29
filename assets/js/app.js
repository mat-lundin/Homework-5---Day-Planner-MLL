// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// use moment() to grab day and hour, save to global var
var tableBodyEl = $('#tablebody')
var time = moment();
var displayTime = time.format('hA')
console.log(time.format('HHmm'))
console.log(time.format('hA'))
//format the moment here instead of the var so we can format it for comparisons later
$('#currentDay').text(time.format('dddd - hA'))
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// html table generator? or create table based on array of objects?
var sched = [
    {
        time: '0900',
        displayTime: '9AM',
        text: ''
    },
    {
        time: '1000',
        displayTime: '10AM',
        text: ''
    },
    {
        time: '1100',
        displayTime: '11AM',
        text: ''
    },
    {
        time: '1200',
        displayTime: '12PM',
        text: ''
    },
    {
        time: '1300',
        displayTime: '1PM',
        text: ''
    },
    {
        time: '1400',
        displayTime: '2PM',
        text: ''
    },
    {
        time: '1500',
        displayTime: '3PM',
        text: ''
    },
    {
        time: '1600',
        displayTime: '4PM',
        text: ''
    },
    {
        time: '1700',
        displayTime: '5PM',
        text: ''
    },
    {
        time: '1800',
        displayTime: '6PM',
        text: ''
    }
]
// console.log(time.format('HHmm') > sched[1].time)

//update sched to be whatever is in local storage
function getSched(){
    sched = localStorage.getItem('sched');
};

//generate the table rows
sched.forEach(function(item,index){
    var rowEl = $('<tr>').addClass(item.displayTime);
    var timeEl = $('<td>').text(item.displayTime);
    var textEl = $('<td>').text(item.text).addClass('text');
    var saveEl = $('<td>').addClass('col-1');
    var saveBtnEl = $('<button>').text('Save').addClass('save');
    saveEl.append(saveBtnEl);
    rowEl.append(timeEl);
    rowEl.append(textEl);
    rowEl.append(saveEl);
    tableBodyEl.append(rowEl);
});
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// based on textContent or data-time? compare to time var
function colorSched(){
    console.log($('tb').children() + ' = tr class')
    console.log(displayTime+ ' = displayTime')
    if ($('tr').attr('class') > displayTime){
        $('tr').addClass('future');
    } else if ($('tr').attr('class') < displayTime){
        $('tr').addClass('past');
    } else {
        $('tr').addClass('present');
    }


    // $('tr').forEach(function(item,index){
    //     if (item.displayTime > time.format(hA)){
    //         $(item).addClass('future');
    //     }
    // })
}
colorSched()

// WHEN I click into a timeblock

// click listener on container, then grab target, see if it is a save or a text
//replaced with listeners on the .save and the .text, then we grab their parent class for the time
// $('.container').click(function(event){
//     // console.log('target = '+target);
//     console.log('event.target = ' + event.target);
    
// })
$('.save').click(function(event){
    console.log('row class = ' + $(event.target).parent().parent().attr('class'));

})
// THEN I can enter an event
// https://stackoverflow.com/questions/28845037/input-text-value-into-a-div
// event listener on the div that has a key listener loop that appends to .textContent
// WHEN I click the save button for that timeblock
// event listener, match on button, grab class or whatever of button
// THEN the text for that event is saved in local storage
// save entire sched array to local storage
// WHEN I refresh the page
// THEN the saved events persist
// repopulate list/schedule with sched