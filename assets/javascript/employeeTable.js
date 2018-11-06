function drawRow(){
    trEmployee = document.createElement("tr");
    tdName = document.createElement("td");
    tdRoll = document.createElement("td");
    tdDate = document.createElement("td");
    tdRate = document.createElement("td");

    trEmployee.appendChild(tdName, tdRoll, tdDate, tdRate);
}

// ON CLICK $("#to-do").val("");
// inputName, inputRole, inputStartDate, inputMonthlyRate





$("#buttonCancel").on("click", function(event) {

    $("#inputName").val("");
    $("#inputRole").val("");
    $("#inputStartDate").val("");
    $("#inputMonthlyRate").val("");
});
