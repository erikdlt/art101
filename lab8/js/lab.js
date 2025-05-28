// lab.js - Lab 8: Anon Functions and Callbacks
// Author: Erik De La Trinidad
// Date: 5-7-25

// first function, multiplies by 2
function multiplyNumber(x) {
    var results = (x*2);
    return results;
};
console.log("4 multiplied by 2: ",multiplyNumber(4));


// define array
let myArray = [7,10,11,15]
console.log("My array: ", myArray);

// use .map with function
var result = myArray.map(multiplyNumber);

console.log("array multiplied by 2: ", result);

//set new variable, use anon function, and print out new results with .map
var mapResults = myArray.map(function(x) {
    var results = (x / 3);
    return results;
});

console.log("array divided by 3: ", mapResults);