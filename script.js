// Select first and second values randomly
var x = Math.floor(Math.random() * 11);
var y = Math.floor(Math.random() * 11);

// Array with different mathematic operations
var mathOperations = [
    "+",
    "-",
    "/",
    "*"
  ];

// Select a mathematics operation randomily
var operation = mathOperations[Math.floor(Math.random()*mathOperations.length)];

// Write to the user a question
document.getElementById("question").innerHTML = x + " " + operation + " " + y;

//Get the result from the user and answer appropriately
var result = document.getElementById("result").addEventListener("keyup", function() { 
    var value1 = document.getElementById("result").value;
    var response = '';
    var tryAgain = '<br><a href="javascript: history.go();">Keep trying</a>';
    if (eval(x.toString() + operation + y.toString()) == value1) {
        response = '<h2> Good job! ' + tryAgain + '</h2>';
    } else {
        response = '<h2> Ooops! ' + tryAgain + '</h2>';
    }
    document.getElementById("answer").innerHTML = response;
});