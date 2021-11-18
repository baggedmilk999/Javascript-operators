//JavaScript Document
var secondsInAMinute = 60;
var minutesInAHour = 60;
var hoursInADay = 24;
var daysInAYear = 365;

var secondsInAnHour = secondsInAMinute * minutesInAHour;
document.writeln("The number of seconds in a hour are " + secondsInAnHour);
document.writeln("<br>");

var secondsInADay = secondsInAnHour * hoursInADay;
document.writeln("The number of seconds in a day are " + secondsInADay);
document.writeln("<br>");

var secondsInAYear = secondsInADay * daysInAYear;
document.writeln("The number of seconds in a year are " + secondsInAYear);
document.writeln("<br>");
document.writeln("Created by Jassmine Figueroa")