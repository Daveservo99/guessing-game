//Things to add:
//keep track of total number of plays and the average guesses per play
//only show this after the fact
//keep track of the first guesses or just the average?
//keep track of guess theyve already made on the screen would make it easier to remember

var rando = Math.floor(Math.random() * 100) + 1;
var guessTotal = 0;

// function compare(rando, guess) {
//   if (rando == guess) {
//     guessTotal++;
//     alert("You got it in " + guessTotal + " guesses.");
//   } else if (rando > guess) {
//     guessTotal++;
//     alert("Guess higher!");
//     guess = prompt("choose a whole number between 1 and 100");
//     compare(rando, guess);
//   } else if (guess > rando) {
//     guessTotal++;
//     alert("Guess lower!");
//     guess = prompt("choose a whole number between 1 and 100");
//     compare(rando, guess);
//   } else {
//     alert("You have to pick a whole number between 1-100!");
//     guess = prompt("choose a whole number between 1 and 100");
//     compare(rando, guess);
//   }
// }

// compare(rando, guess);
//var guess = 0;

//do while loop runs at least once.  put the validation in another do while loop to start this.  had to have
//the last else statement to not return a lower so ended up moving the alert to the last else.  cant have a condition on the else
// dont have to have a straight else to finish.  you can finish with an else if and jeff said you can just have an if as well
do {
  do {
    var guess = prompt("choose a whole number between 1 and 100");
    //this ! in front of this statement means the inverse of it.  we break the loop only if guess satisies both of these b/c the statement is to keep looping
    //if it does not equall this.
  } while (!(guess >= 1 && guess <= 100));
  guessTotal++;

  if (rando > guess) {
    alert("Guess higher");
  } else if (rando < guess) {
    alert("Guess lower");
  } else {
    alert("you got it in " + guessTotal + " guesses");
  }
} while (rando != guess);
