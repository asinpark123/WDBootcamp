var age = Number(prompt("Enter your age"));

if (age < 0){
    console.log("You've entered a negative number!");
    alert("You've entered a negative number!");
}

else if(Math.sqrt(age)%1 == 0){
    console.log("Perfect Square!");
    alert("Perfect Square!");
}

else if (age == 21){
    console.log("Happy 21st birthday!");
    alert("Happy 21st birthday!");
}

else if(age%2 == 1){
    console.log("Your age is odd!");
    alert("Your age is odd!");
}

else if(age%2 == 0){
    console.log("Your age is even!");
    alert("Your age is even!");
}
