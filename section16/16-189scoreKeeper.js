var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var score1 = document.querySelector("#player1");
var score2 = document.querySelector("#player2");
var p = document.querySelector("p");
var maxScore = document.querySelector(".maxScore");
var maxScoreInput = document.querySelector(".maxScoreInput");
var btn1 = document.querySelector(".p1Btn");
var btn2 = document.querySelector(".p2Btn");
var reset = document.querySelector(".reset");
var frenzy = document.querySelector(".startChange");
var stop = document.querySelector(".stopChange");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var maximum = maxScoreInput.value;

btn1.addEventListener("click",function(){
    if(!gameOver){
        p1Score++;
        score1.textContent = p1Score;
        if (p1Score == maximum){
            gameOver = true;
            score1.classList.add("green");
            // dispatchEvent()
        }
    }
});

btn2.addEventListener("click",function(){
    if (!gameOver) {
        p2Score++;
        score2.textContent = p2Score;
        if (p2Score == maximum) {
            gameOver = true;
            score2.classList.add("green");
        }
    }
});

function init(){
    score1.textContent = 0;
    p1Score = 0;
    score2.textContent = 0;
    p2Score = 0;
    score1.classList.remove("green");
    score2.classList.remove("green");
    gameOver = false;
}

reset.addEventListener("click",function(){
    init();
});

maxScoreInput.addEventListener("change",function(){
     maximum = this.value;         // .value retrieves value of number input
     maxScore.textContent = maximum;
     init();
});


// Random Hex color changer
// Create array of Hex characters
var hexChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
    , "A", "B", "C", "D", "E", "F"];
var hexColor = "#";
// Make randomized indecies
function randomIndex(){
    var randomIndex = Math.round(Math.random() * 15.4, 0);
    return randomIndex;
}
// Get 6 random hex char and combine
function randomHex(){
    var tempColor = "#";
    for(var i = 0; i < 6;i++){
        tempColor += hexChar[randomIndex()];
    };
    hexColor = tempColor;
    console.log(hexColor);
    return hexColor;
}

var frenzyState = null;
var isChanging = true;

// continue changing the background color every 100 ms

frenzy.addEventListener('click',function(){
    if (isChanging){
        frenzyState = setInterval(function () {
            body.style.background = randomHex();
        }, 50);
        isChanging = false;
    }
});

stop.addEventListener('click',function(){
    clearInterval(frenzyState);
    isChanging = true;
});
