// popup

// document.querySelector("#show-create").addEventListener("click",function(){
//     document.querySelector(".popup").classList.add("active");
//   });
//   document.querySelector(".popup .close-btn").addEventListener("click",function(){
//     document.querySelector(".popup").classList.remove("active");
//   });
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
       modal.style.display = "none";
     }
