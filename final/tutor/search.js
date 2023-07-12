var table = document.querySelector(".table");
var nextButton = table.querySelector(".next");
var previousButton = table.querySelector(".pre");
var tableBody = table.querySelector("tbody");
var searchInput = document.querySelector("input[name='search']");
var rowsPerPage = 3; // Number of rows to display per page
var currentPage = 0; // Current page index

// Show the rows for the current page
function showPage(pageIndex) {
  var rows = tableBody.rows;

  // Calculate the start and end index of rows for the current page
  var startIndex = pageIndex * rowsPerPage;
  var endIndex = startIndex + rowsPerPage;

  // Hide all rows
  for (var i = 0; i < rows.length; i++) {
    rows[i].style.display = "none";
  }

  // Show rows within the current page range
  for (var j = startIndex; j < endIndex && j < rows.length; j++) {
    rows[j].style.display = "";
  }
}

// Filter the rows based on the search input value
function filterRows(searchValue) {
  var rows = tableBody.rows;
  searchValue = searchValue.toLowerCase();

  // Iterate through each row and hide/show based on the search value
  for (var i = 0; i < rows.length; i++) {
    var name = rows[i].querySelector("td:nth-child(2)").textContent.toLowerCase();

    if (name.includes(searchValue)) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

// Show the first page on initial load
showPage(currentPage);

// Event listener for the "Next" button
nextButton.addEventListener("click", function () {
  var rows = tableBody.rows;

  // Check if there are more pages to display
  if ((currentPage + 1) * rowsPerPage < rows.length) {
    currentPage++;
    showPage(currentPage);
  }
});

// Event listener for the "Previous" button
previousButton.addEventListener("click", function () {
  // Check if there are previous pages to display
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

// Event listener for the search input
searchInput.addEventListener("input", function () {
  var searchValue = searchInput.value.trim();
  filterRows(searchValue);
});
