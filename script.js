 function addvalue() {
	const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

	const table = document.getElementById("book-list")
	const.newrow = table.insertRow();
	const.cell1 = newrow.inserCell();
	const.cell2 = newrow.inserCell();
	const.cell3 = newrow.insertCell();
	const.cell4 = newrow.inserCell();

	cell1.innerHTML=title;
	cell2.innerHTML = author;
	cell3.innerHTML = isbn;
	cell4.innerHTML = `<span class="delete-btn" onclick="deleteRow(this)">&times;</span>`
	 function deleteRow(btn) {
    const row = btn.closest("tr");
    row.remove();
  }
	
}