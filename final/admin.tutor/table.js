var nextButton = document.querySelector(".next");
var previousButton = document.querySelector(".pre");
var tableBody = document.querySelector(".table__body");
var table = document.querySelector("table");
var totalPages = Math.ceil(table.rows.length / 5); // Assuming 5 rows per page
var currentPage = 1;

// Function to show/hide the appropriate table rows based on the current page
function showTableRows() {
  var start = (currentPage - 1) * 5; // Assuming 5 rows per page
  var end = start + 5; // Assuming 5 rows per page
  var rows = Array.from(table.rows).slice(1); // Exclude the header row
  rows.forEach(function(row, index) {
    if (index >= start && index < end) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
}

// Function to update the table based on the current page
function updateTable() {
  showTableRows();
  // Disable/enable buttons based on current page
  if (currentPage === 1) {
    previousButton.disabled = true;
  } else {
    previousButton.disabled = false;
  }
  if (currentPage === totalPages) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

// Event listener for the Next button
nextButton.addEventListener("click", function() {
  if (currentPage < totalPages) {
    currentPage++;
    updateTable();
  }
});

// Event listener for the Previous button
previousButton.addEventListener("click", function() {
  if (currentPage > 1) {
    currentPage--;
    updateTable();
  }
});

// Initial table setup
updateTable();
