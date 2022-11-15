var input = document.getElementById("field");
var check = document.getElementById("enter");
var ul = document.querySelector("ul");
var clear = document.getElementById("clear");

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