// var ans = prompt("Are we there yet?");

// while(ans !== "yes" && ans !== "yeah"){
//     var ans = prompt("Are we there yet?");
// }

// alert("Yay, we finally made it!");

// Version 2
var ans = prompt("Are we there yet?");

while (ans.indexOf("yes") == -1) {
    var ans = prompt("Are we there yet?");
}

alert("Yay, we finally made it!");