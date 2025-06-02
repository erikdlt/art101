/*
   lab.js - AJAX, use to get info from external source

   Requirements: jQuery must be loaded for this script to work.

   Author: Erik De La Trinidad
   Date: 1 June 2025
*/

const ajaxObj = {
    url: "http://yerkee.com/api/fortune",
    //data: {}
    type: "GET",
    dataType: "json"
}

$("#activate").click(function() {

    $.ajax(ajaxObj)
    //callback for success
    .done(function(data) {
        console.log("Success!");
        console.log(data);
        // extract the fortune
        let fortune = data.fortune;

        //insert output
        $("#output").html("<h1>" + fortune);
    })

    .fail(function(xhr, status, errorThrown) {
        console.log(errorThrown + "Status:" + status );
    });
})