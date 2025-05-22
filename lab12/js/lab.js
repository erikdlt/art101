/*
   lab.js -

   Requirements: jQuery must be loaded for this script to work.

   Author: Erik De La Trinidad
   Date: 21 May 2025
*/

// create function
function sortingHat(str) {
    let length = str.length;
    let mod = length % 4;
    region = "";
    if(mod == 0) {
        region = "Kanto, the first Pokemon region!";
    } else if(mod == 1) {
        region = "Johto, home of the second generation of Pokemon!";
    } else if(mod == 2) {
        region = "Hoenn, the island region!"
    } else if(mod ==3) {
        region = "Sinnoh, the home of Mount Coronet!";
    }
return region;
    
}


// create click listener
$("#button").click(function() {
    let name = $("#input").val()
    console.log(name);
    let nameLength = name.length;
    console.log(nameLength);
    let region = sortingHat(name);
    console.log(region);
    // add region to output
    $("#output").html("<h1>" + region + "</h1>");

})