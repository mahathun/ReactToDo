var moment = require('moment');

console.log(moment().format());

//now
var now = moment();


//unix
console.log(now.unix());

//timestamp in unix
var timestamp = '1482812871';
var currenttimestap = moment.unix(timestamp);
console.log(currenttimestap.format("MMM D, Y @ h:mm a"));

//January 3rd, 2016 @ 12.13 AM
console.log(now.format("MMMM Do, Y @ h:mm: A"));
