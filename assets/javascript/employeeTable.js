var config = {
    apiKey: "AIzaSyAoBn5kFWrbJNO5WMqTBktG0L37MkHFIwY",
    authDomain: "somethingawesome-c20cd.firebaseapp.com",
    databaseURL: "https://somethingawesome-c20cd.firebaseio.com",
    projectId: "somethingawesome-c20cd",
    storageBucket: "somethingawesome-c20cd.appspot.com",
    messagingSenderId: "154210247376"
}
firebase.initializeApp(config);
var database = firebase.database();

database.ref('employees').on("child_added", function(snapshot) {

     var name = snapshot.val().name;
     var roll = snapshot.val().roll;
     var date = snapshot.val().date;
     var rate = snapshot.val().rate;

     console.log(name, roll, date, rate);

    drawRow(name, roll, date, rate);
});

function drawRow(name, roll, date, rate){

    var trEmployee = document.createElement("tr");
    var tdName = document.createElement("td");
    var tdRoll = document.createElement("td");
    var tdDate = document.createElement("td");
    var tdMonths = document.createElement("td");
    var tdRate = document.createElement("td");
    var tdTotalPay = document.createElement("td");

    tdName.textContent = name;
    tdRoll.textContent = roll;
    tdDate.textContent = date;
    tdRate.textContent = rate;

    tdMonths.textContent = "";
    tdTotalPay.textContent = "";

    trEmployee.append(tdName, tdRoll, tdDate, tdMonths, tdRate, tdTotalPay);
    document.getElementById("employee-table").append(trEmployee);
    
}

$("#buttonCreate").html("<button>");
$("#buttonCancel").html("<button>");

$("#buttonCreate").on("click", function(event){
    var inputName = $("#inputName").val().trim();
    var inputRole = $("#inputRole").val().trim();
    var inputStartDate = $("#inputStartDate").val().trim();
    var inputMonthlyRate = $("#inputMonthlyRate").val().trim();

    database.ref("employees").push({
        name: inputName,
        role: inputRole,
        date: inputStartDate,
        rate: inputMonthlyRate
    })

    drawRow(inputName, inputRole, inputStartDate, inputMonthlyRate);

    $("#inputName").val("");
    $("#inputRole").val("");
    $("#inputStartDate").val("");
    $("#inputMonthlyRate").val("");
});


$("#buttonCancel").on("click", function(event) {

    $("#inputName").val("");
    $("#inputRole").val("");
    $("#inputStartDate").val("");
    $("#inputMonthlyRate").val("");
});