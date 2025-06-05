/*
   lab.js - processing JSON from API

   Requirements: jQuery must be loaded for this script to work.

   Author: Erik De La Trinidad
   Date: 4 June 2025
*/

// ajax obj
const ajaxObj = {
    url: "https://api.allorigins.win/raw?url=https://xkcd.com/707/info.0.json",
//    data: {}
    type: "GET",
    dataType: "json"
}

// call ajax
$.ajax(ajaxObj)
// success callback
.done(function(data) {
    const comicObj = data;

    console.log(comicObj);
    //extract data
    let title = comicObj.title;
    let img = comicObj.img;
    let alt = comicObj.alt;

    // create elements
    $("#output").html(`<h2>${title}</h2>`);
    $("#output").append(`<img src='${img}'/>`);
    $("#output").append(`<p class='alt'>${alt}</p>`);
    

})

// fail callback
.fail(function(xhr, status, error) {
    console.error(error);

})