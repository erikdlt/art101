/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Erik De La Trinidad
   Date: 13 May 2025
*/

function generateRandomText() {
  const text = "Will Smith and Martin Lawrence, I'm a bad boy Went and got off my ass and got to the cash and got in my bag, boy Please don't think it's sweet, I stay with the heat even though I'm a sad boy You better watch the way you breathe around me 'fore that breath be your last, boy";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen); }

  //click listener for button
  $("#make-convo").click(function() {
    //get new fake dialogue
    const newText = generateRandomText();
    //append output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  })

  