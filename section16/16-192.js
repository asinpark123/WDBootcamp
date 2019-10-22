var lis = document.querySelectorAll("li");
var li1 = document.querySelector("li");

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("mouseover",function(){
        this.classList.add("green");
    });
    lis[i].addEventListener("mouseleave",function(){
        this.classList.remove("green");
    });
    lis[i].addEventListener("click",function(){
        this.classList.toggle("done");
    });
    // lis[i].addEventListener("click",function(){
    //     this.classList.remove("linethrough");
    // });
}