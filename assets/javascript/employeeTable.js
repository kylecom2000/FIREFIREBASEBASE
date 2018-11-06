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



database.ref('employees').on("value", function(snapshot) {

    // If Firebase has a highPrice and highBidder stored (first case)
    if (snapshot.child("employee").exists()) {
        console.log ("found Employee's...");

        // Set the variables for highBidder/highPrice equal to the stored values in firebase.

        console.log (snapshot);

        drawRow();
    };
});

function drawRow(){

trEmployee = document.createElement("tr");
tdName = document.createElement("td");
tdRoll = document.createElement("td");
tdDate = document.createElement("td");
tdRate = document.createElement("td");

trEmployee.appendChild(tdName, tdRoll, tdDate, tdRate);
}