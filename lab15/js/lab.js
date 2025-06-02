/*
   lab.js - AJAX, use to get info from external source

   Requirements: jQuery must be loaded for this script to work.

   Author: Erik De La Trinidad
   Date: 1 June 2025
*/

const ajaxObj = {
    url: "https://pokeapi.co/api/v2/pokemon/diglett",
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
        // extract the pokemon info
        let pokemon = data.pokemon;

        //insert output
        $("#output").html("<h1>" + pokemon);
    })

    .fail(function(xhr, status, errorThrown) {
        console.log(errorThrown + "Status:" + status );
    });
})