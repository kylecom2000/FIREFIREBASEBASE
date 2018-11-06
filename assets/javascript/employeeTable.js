function drawRow(){
    trEmployee = document.createElement("tr");
    tdName = document.createElement("td");
    tdRoll = document.createElement("td");
    tdDate = document.createElement("td");
    tdRate = document.createElement("td");

    trEmployee.appendChild(tdName, tdRoll, tdDate, tdRate);
}