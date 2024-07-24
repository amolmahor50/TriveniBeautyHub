const navbar = document.getElementById("navbar");
const active = document.getElementById("active");
const close = document.getElementById("close");

active.addEventListener("click", function(){
    navbar.style.display = "block";
    active.style.display = "none";
    close.style.display = "block";
})
close.addEventListener("click", function(){
    navbar.style.display = "none";
    active.style.display = "block";
    close.style.display = "none";
})

// main page cursor...

// let html = document.querySelector("html");
// let cursor = document.getElementById("cursor");

// html.addEventListener("mousemove" , function(ele){
//     cursor.style.left = ele.x + "px";
//     cursor.style.top = ele.y + "px";
// })