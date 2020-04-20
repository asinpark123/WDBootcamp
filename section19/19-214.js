var textInput = $("input[type = text]");
var h1 = $("h1");
var buttons = $("button");


// $("button").click(function () {
//     var text = $(this).text();
//     console.log("You clicked " + text);
// });

// $("button").click(function(){
//     $(this).toggleClass("warning");
// });

// textInput.keypress(function(event){
//     if(event.which == 13){
//         console.log(textInput.val());
//     }
// });
textInput.on("keypress", function(){
    console.log("Key pressed!");
});

h1.on("click", function(){
    $(this).css("color","red");
});

buttons.on("mouseenter",function(){
    $(this).css({ fontWeight: "bold", background:"rgb(190, 230, 253)"});
});
buttons.on("mouseleave",function(){
    $(this).css({ fontWeight: "normal", background:"white"});
});
