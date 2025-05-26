/*
   lab.js - loops

   Requirements: jQuery must be loaded for this script to work.

   Author: Erik De La Trinidad
   Date: 26 May 2025
*/

for (let i = 1; i <= 200; i++) {

  if (i % 105 === 0) {
    console.log("FizzBuzzBoom!");
  }
  else if (i % 35 === 0) {
    console.log("BuzzBoom!");
  }
  else if (i % 21 === 0) {
    console.log("FizzBoom!");
  }
  else if (i % 15 === 0) {
    console.log("FizzBuzz");
  }
  else if (i % 7 === 0) {
    console.log("Boom!");
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else {
    console.log(i);
  }
}

let oneLongString = "";

for (let i = 1; i <= 200; i++) {
      if (i % 105 === 0) {
        oneLongString += i + " FizzBuzzBoom!<br>";
      } else if (i % 35 === 0) {
        oneLongString += i + " BuzzBoom!<br>";
      } else if (i % 21 === 0) {
        oneLongString += i + " FizzBoom!<br>";
      } else if (i % 15 === 0) {
        oneLongString += i + " FizzBuzz<br>";
      } else if (i % 7 === 0) {
        oneLongString += i + " Boom!<br>";
      } else if (i % 5 === 0) {
        oneLongString += i + " Buzz<br>";
      } else if (i % 3 === 0) {
        oneLongString += i + " Fizz<br>";
      } else {
        oneLongString += i + "<br>";
      }
    }

    $("#output").html(oneLongString);