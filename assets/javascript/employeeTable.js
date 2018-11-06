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

database.ref('employees').on("childadded", function(snapshot) {

     var name = snapshot.val().name;
     var roll = snapshot.val().roll;
     var date = snapshot.val().date;
     var rate = snapshot.val().rate;

    drawRow(name, roll, date, rate);
});

function drawRow(name, roll, date, rate){

    trEmployee = document.createElement("tr");
    tdName = document.createElement("td");
    tdRoll = document.createElement("td");
    tdDate = document.createElement("td");
    tdRate = document.createElement("td");

    tdName.textContent = name;
    tdRoll.textContent = roll;
    tdDate.textContent = date;
    tdRate.textContent = rate;

    trEmployee.appendChild(tdName, tdRoll, tdDate, tdRate);
    document.getElementById("employee-table").append(trEmployee);
    
}


$("#buttonCreate").on("click", function(event){
    inputName = $("#inputName").val().trim();
    inputRole = $("#inputRole").val().trim();
    inputStartDate = $("#inputStartDate").val().trim();
    inputMonthlyRate = $("#inputMonthlyRate").val().trim();

    database.ref("employees").push({
        name: inputName,
        role: inputRole,
        date: inputStartDate,
        rate: inputMonthlyRate
    })


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