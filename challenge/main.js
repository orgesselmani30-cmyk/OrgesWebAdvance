var butoni1 = document.getElementById("btn1");
var butoni2 = document.getElementById("btn2");
var butoni3 = document.getElementById("btn3");

var circle = document.getElementById("circle");
var square = document.getElementById("square");
var triangle = document.getElementById("triangle");

butoni1.onlick = function() {
 circle.style.backgroundColor="red";
 circle.style.width="80px";
 circle.style.height="80px";
 circle.style.borderRadius="100%";

}

butoni2.onlick = function() {
 square.style.backgroundColor="red";
 square.style.width="80px";
 square.style.height="80px";

}

butoni3.onlick = function() {
 triangle.style.backgroundColor="red";
 triangle.style.width="100px";
 triangle.style.height="150px";
 

}