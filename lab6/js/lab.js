// index.js - Lab 6: Arrays and Objects
// Author: Erik De La Trinidad
// Date: 4-27-25

// Define Variables
myTransport = ["walking", "car", "bus"];

// create object for my main ride
myMainRide = {
  make: "Toyota",
  model: "Tacoma",
  color: "silver",
  year: 2003,
  age: function() {
    return 2025 - this.year;
  }
}

// output
document.writeln("Getting around: ", myTransport, "<br>");
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");


// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
