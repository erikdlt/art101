// lab.js - Lab 7: Functions
// Author: Erik De La Trinidad
// Date: 5-1-25

//sortUserName - takes letter input and sorts name

function sortUserName() {
    let userName = window.prompt("Please enter your name:");
    console.log("Your Name:", userName);
    //split
    let nameArray = userName.split('');
    console.log("name array: ", nameArray);
    //sort
    let nameArraySorted = nameArray.sort();
    console.log("name array sorted: ", nameArraySorted);
    //join array into a string
    let sortedName = nameArraySorted.join('');
    console.log("name sorted: ", sortedName);

    return sortedName;
}

//output

document.writeln("Here is your fixed name: "+ sortUserName()+ "</br>");