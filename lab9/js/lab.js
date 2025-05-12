/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Erik De La Trinidad
   Date: 11 May 2025
*/

//add button to challenge section
$("#challenge").append("<button id='button-challenge'>switch up</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

//add button to problems section
$("#problems").append("<button id='button-problems'>switch up</button>");

// add click listner to problems button
$("#button-problems").click(function(){
    $("#problems").toggleClass("special");
});

//add button to results section
$("#results").append("<button id='button-results'>switch up</button");

// add click listener to results section
$("#button-results").click(function(){
    $("#results").toggleClass("special");
})