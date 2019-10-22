var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = true;

button.addEventListener("click",function(){
    // if (isPurple){
    //     body.style.background = "purple";
    // }
    // else{
    //     body.style.background = "white";
    // }
    // isPurple = !isPurple;
    body.classList.toggle("purple");
});