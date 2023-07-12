
// Example usage
var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  if (!validateForm()) {
    event.preventDefault(); // Prevent form submission if validation fails
  }
});



var addButton = document.getElementById("myBtn");
var modal = document.getElementById("myModal");

// Open the form when the button is clicked
addButton.addEventListener("click", function() {
  modal.style.display = "block";
});

// Close the form when the "Cancel" button is clicked
var cancelButton = document.querySelector(".btn1-submit");
cancelButton.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close the form when the user clicks outside of it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
