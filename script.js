let tableData = [
    
  ];
  
  const addRowButton = document.getElementById("add-row-button");
  const saveButton = document.getElementById("save-button");
  const dataTable = document.getElementById("data-table");
  
  addRowButton.addEventListener("click", addRow);
  saveButton.addEventListener("click", saveData);
  
  renderTable();
  
  function renderTable() {
    dataTable.tBodies[0].innerHTML = "";
    
    
    for (let i = 0; i < tableData.length; i++) {
      const row = document.createElement("tr");
      
      
      const idCell = document.createElement("td");
      idCell.textContent = tableData[i].id;
      row.appendChild(idCell);
      
      const nameCell = document.createElement("td");
      nameCell.innerHTML = `<input type="text" value="${tableData[i].name}">`;
      row.appendChild(nameCell);
      
      const rollNoCell = document.createElement("td");
      rollNoCell.innerHTML = `<input type="text" value="${tableData[i].rollNo}">`;
      row.appendChild(rollNoCell);
      
      const marksCell = document.createElement("td");
      marksCell.innerHTML = `<input type="text" value="${tableData[i].marks}">`;
      row.appendChild(marksCell);
      
      const emailCell = document.createElement("td");
      emailCell.innerHTML = `<input type="text" value="${tableData[i].email}">`;
      row.appendChild(emailCell);
      
      const saveCell = document.createElement("td");
      saveCell.innerHTML = `<button class="save-row-button">Save</button>`;
      row.appendChild(saveCell);
      
      dataTable.tBodies[0].appendChild(row);
    }
    
    const saveRowButtons = document.getElementsByClassName("save-row-button");
    for (let i = 0; i < saveRowButtons.length; i++) {
      saveRowButtons[i].addEventListener("click", saveRow);
    }
  }
  
  function addRow() {
    const newId = tableData.length + 1;

    tableData.push({id: newId, name: "", rollNo: "", marks: "", email: ""});
    
   
    renderTable();
    }
    
    function saveData() {
    const tableRows = dataTable.tBodies[0].querySelectorAll("tr");
    for (let i = 0; i < tableRows.length; i++) {
    const rowCells = tableRows[i].querySelectorAll("td");
    const rowId = parseInt(rowCells[0].textContent);
    const rowData = tableData.find(item => item.id === rowId);
    rowData.name = rowCells[1].querySelector("input").value;
    rowData.rollNo = rowCells[2].querySelector("input").value;
    rowData.marks = rowCells[3].querySelector("input").value;
    rowData.email = rowCells[4].querySelector("input").value;
    }
    
    console.log(tableData);
    }
    
    function saveRow(event) {
    const saveButton = event.target;
    const row = saveButton.parentNode.parentNode;
    const rowCells = row.querySelectorAll("td");
    const rowId = parseInt(rowCells[0].textContent);
    const rowData = tableData.find(item => item.id === rowId);
    rowData.name = rowCells[1].querySelector("input").value;
    rowData.rollNo = rowCells[2].querySelector("input").value;
    rowData.marks = rowCells[3].querySelector("input").value;
    rowData.email = rowCells[4].querySelector("input").value;

    console.log(rowData);
    }
    renderTable();