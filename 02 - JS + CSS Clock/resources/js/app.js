var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

var count = 0;

// function to drive the second hand
function tick() {
   var date = new Date();
   var seconds = date.getSeconds();
   var minutes = date.getMinutes();
   var hours = date.getHours();
   var secondDegrees = (seconds * 6)+90;
   var minuteDegrees = (minutes*6)+90;
   var hourDegrees = (hours*30)+90;
   secondHand.style.transform = 'rotate('+secondDegrees+'deg)';
   minuteHand.style.transform = 'rotate('+minuteDegrees+'deg)';
   hourHand.style.transform = 'rotate('+hourDegrees+'deg)';
};

// function to drive the minute hand
function minuteHandTick() {

};

// function to drive the hour hand
function hourHandTick() {

};


setInterval(tick, 1000);



// could also (if I wanted to make the 'tick' happen with the hour and minute as well, count ticks , and when secondTick=60, minutehand advance, same idea for hour hand. )
