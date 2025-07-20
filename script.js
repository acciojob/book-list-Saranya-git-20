 function addvalue() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    const table = document.getElementById("book-list");
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell();
    const cell2 = newRow.insertCell();
    const cell3 = newRow.insertCell();
    const cell4 = newRow.insertCell();

    cell1.innerHTML = title;
    cell2.innerHTML = author;
    cell3.innerHTML = isbn;
    cell4.innerHTML = `<span class="delete" onclick="deleteRow(this)">&times;</span>`;
}

function deleteRow(btn) {
    const row = btn.closest("tr");
    row.remove();
}