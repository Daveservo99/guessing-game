//Things to add:
//keep track of total number of plays and the average guesses per play
//only show this after the fact
//keep track of the first guesses or just the average?
//keep track of guess theyve already made on the screen would make it easier to remember

var rando = Math.floor(Math.random() * 100) + 1;
var guessTotal = 0;

var guess = prompt("choose a whole number between 1 and 100");

function compare(rando, guess) {
  if (rando == guess) {
    guessTotal++;
    alert("You got it in " + guessTotal + " guesses.");
  } else if (rando > guess) {
    guessTotal++;
    alert("Guess higher!");
    guess = prompt("choose a whole number between 1 and 100");
    compare(rando, guess);
  } else if (guess > rando) {
    guessTotal++;
    alert("Guess lower!");
    guess = prompt("choose a whole number between 1 and 100");
    compare(rando, guess);
  } else {
    alert("You have to pick a whole number between 1-100!");
    guess = prompt("choose a whole number between 1 and 100");
    compare(rando, guess);
  }
}

compare(rando, guess);
