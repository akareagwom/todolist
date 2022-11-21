var input = document.getElementById("field");
var check = document.getElementById("enter");
var ul = document.querySelector("ul");
var clear = document.getElementById("clear");
var toggle = document.getElementById("toggleDark");
var body = document.querySelector('body');


toggle.addEventListener('click', function(){
    document.getElementById('mainImage').src = "images/bg-desktop-dark.jpg";
    document.getElementById("toggleDark").src = "images/icon-sun.svg"
    // this.classList.toggle('url(./images/icon-sun.svg)')
    
})

check.addEventListener("click",function(){
    
    if(input.value.length > 0){
    var li= document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value=""
    }
})
clear.addEventListener("click",function () {
    
})