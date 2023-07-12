var nextButtons = document.querySelectorAll(".next");
var previousButtons = document.querySelectorAll(".pre");
var tableBodies = document.querySelectorAll(".table__body");
var tables = document.querySelectorAll("table");
var rowsPerPage = 3; // Number of rows per page

// Function to show/hide the appropriate table rows based on the current page
function showTableRows(tableBody, table, currentPage) {
  var start = (currentPage - 1) * rowsPerPage;
  var end = start + rowsPerPage;
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
function updateTable(tableBody, table, currentPage) {
  showTableRows(tableBody, table, currentPage);
  // Disable/enable buttons based on the current page
  if (currentPage === 1) {
    previousButtons.forEach(function(button) {
      button.disabled = true;
    });
  } else {
    previousButtons.forEach(function(button) {
      button.disabled = false;
    });
  }
  if (currentPage * rowsPerPage >= table.rows.length - 1) {
    nextButtons.forEach(function(button) {
      button.disabled = true;
    });
  } else {
    nextButtons.forEach(function(button) {
      button.disabled = false;
    });
  }
}

// Event listener for the Next buttons
nextButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var tableBody = button.closest(".table__body");
    var table = tableBody.querySelector("table");
    var currentPage = parseInt(table.getAttribute("data-page")) || 1;
    if (currentPage * rowsPerPage < table.rows.length - 1) {
      currentPage++;
      table.setAttribute("data-page", currentPage);
      updateTable(tableBody, table, currentPage);
    }
  });
});

// Event listener for the Previous buttons
previousButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var tableBody = button.closest(".table__body");
    var table = tableBody.querySelector("table");
    var currentPage = parseInt(table.getAttribute("data-page")) || 1;
    if (currentPage > 1) {
      currentPage--;
      table.setAttribute("data-page", currentPage);
      updateTable(tableBody, table, currentPage);
    }
  });
});

// Initial table setup
tableBodies.forEach(function(tableBody) {
  var table = tableBody.querySelector("table");
  table.setAttribute("data-page", 1);
  updateTable(tableBody, table, 1);
});
