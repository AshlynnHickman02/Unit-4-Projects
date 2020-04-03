"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Ashlynn Hickman 
   Date:  March 30, 2020 
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/

var allLetters; 
var currentLetter; 
var wordLetters; 
var acrossClue; 
var downClue; 
var typeDirection; 

window.onload = init;
function init(){
 
   allLetters = document.querySelectorAll("table#crossword span");
   currentLetter = allLetters[0];
   var acrossID = currentLetter.dataset.clueA;
   var downID = currentLetter.dataset.clueD;
   acrossClue = document.getElementById("acrossID");
   downClue = document.getElementById("downID");  
   
   formatPuzzle(currentLetter){
      for(i = 0; i < allLetters.length; i++){
         allLetters[i].style.cursor = "pointer";
         allLetters[i].addEventListener("onmousedown", function puzzle(){
            formatPuzzle(event);
         })
      }
   }
}

// function formatPuzzle(puzzleLetter){
//    currentLetter = puzzleLetter;
//    for(i = 0; i > puzzleLetter)
// }



// function that formats the color of the table cells and clues based on each letter 
function formatPuzzle(puzzleLetter) {
   currentLetter = puzzleLetter; 
   // sets background color of all letters to be an empty string
   for (var i = 0; i < allLetters.length; i++) {
      allLetters[i].style.backgroundColor = "";
   }
   // sets color for the clues to an empty string
   acrossClue.style.color = "";
   downClue.style.color = "";
   
   //looking if there is a clue for the current letter
   if (currentLetter.dataset.clueA !== undefined) {
      // reference the clue for the across letter
      acrossClue = document.getElementById(currentLetter.dataset.clueA);
      // changing the across color to blue
      acrossClue.style.color = "blue";
      // reference current clue letter using css
      wordLetters = document.querySelectorAll("[data-clue-a = " + currentLetter.dataset.clueA + "]");
      // for loop to change the background color of wordLetters
      for (var i = 0; i < wordLetters.length; i++) {
         wordLetters[i].style.backgroundColor = "rgb(231, 231, 255)";
      }
   }
 
   //everything above, just turning the down clue to red 
   if (currentLetter.dataset.clueD !== undefined) {
      downClue = document.getElementById(currentLetter.dataset.clueD);
      downClue.style.color = "red";
      wordLetters = document.querySelectorAll("[data-clue-d = " + currentLetter.dataset.clueD + "]");
      for (var i = 0; i < wordLetters.length; i++) {
         wordLetters[i].style.backgroundColor = "rgb(255, 231, 231)";
      }
   }
   
   // if the direction is right, change blue, if left, red 
   if (typeDirection === "right") {
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   } else {
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   }
}

function selectLetter(){
   var leftLetter = currentLetter.dataset.left;
   var upLetter = currentLetter.dataset.up;
   var downLetter = currentLetter.dataset.down;
   var rightLetter = currentLetter.dataset.right;
   var userKey = "e.keycode";

   
   if(userKey === 37){
      formatPuzzle(leftLetter);
   }
   else if(userKey === 38){
      formatPuzzle(upLetter);
   } 
   else if (userKey === 39 || userKey === 9){
      formatPuzzle(rightLetter);
   }
   else if(userKey === 40 || userKey === 13){
      formatPuzzle(downLetter);
   }
   else if(userKey === 8 || userKey === 46){
      currentLetter = "";
   }
   else if (userKey === 32){
      switchTypeDirection();
   }
   else if(userKey >= 65 && userKey <=  90){
      currentLetter = getChar(userKey);
   }

   e.preventDefault();
}







/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
