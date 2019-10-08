// create secret number
var secretNumber = 4;

// ask user to input guess
var guess = Number(prompt("Guess a number"));

// check guess

if (guess === secretNumber){
    alert("You got the right number!");
}

else if (secretNumber > guess){
    alert("Higher");
}

else if (secretNumber < guess){
    alert("Lower");
}