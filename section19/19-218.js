var fadeOutBtn = $("#fadeOut");
var fadeInBtn = $("#fadeIn");
var toggle = $("#toggle");
var divs = $("div");

// fadeOutBtn.on("click",function(){
//     divs.fadeOut("2000", function(){
//         // $(this).remove();
//     });
// });

// fadeInBtn.on("click",function(){
//     divs.fadeIn("2000");
// });

// toggle.on("click",function(){
//     divs.fadeToggle("2000");
// });

fadeOutBtn.on("click",function(){
    divs.slideUp("2000", function(){
        // $(this).remove();
    });
});

fadeInBtn.on("click",function(){
    divs.slideDown("2000");
});

toggle.on("click",function(){
    divs.slideToggle("2000");
});