const table = document.getElementById("myTable");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPage = 1;
const rowsPerPage = 3;
const totalRows = table.rows.length - 1;
const totalPages = Math.ceil(totalRows / rowsPerPage);

function showRows() {
  for (let i = 1; i < table.rows.length; i++) {
    if (i <= currentPage * rowsPerPage && i > (currentPage - 1) * rowsPerPage) {
      table.rows[i].style.display = "";
    } else {
      table.rows[i].style.display = "none";
    }
  }
}

function updateButtons() {
  if (currentPage === 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (currentPage === totalPages) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

prevBtn.addEventListener("click", () => {
  currentPage--;
  showRows();
  updateButtons();
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  showRows();
  updateButtons();
});

showRows();
updateButtons();
