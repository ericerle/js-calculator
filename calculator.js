console.log("JavaScript running")

var first = undefined;
var newValue = undefined;
var finalAnswer = undefined;
var math = undefined;

//ac key clears everything

document.getElementById("ac").addEventListener("click", function() {
  document.getElementById("answer").innerHTML="";
  first = undefined;
  newValue = undefined;
  finalAnswer = undefined;
  math = undefined;
})

//each key adds its value to the answer bar

document.getElementById("decimal").addEventListener("click", function() {
  console.log("clicked decimal");
  var oldValue = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML=oldValue+".";
  newValue = document.getElementById("answer").innerHTML;
})

document.getElementById("zero").addEventListener("click", function() {
  console.log("clicked zero");
  var oldValue = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML=oldValue+"0";
  newValue = document.getElementById("answer").innerHTML;
})

document.getElementById("one").addEventListener("click", function() {
  console.log("clicked one");
  var oldValue = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML=oldValue+"1";
  newValue = document.getElementById("answer").innerHTML;
})

document.getElementById("two").addEventListener("click", function() {
  console.log("clicked two");
  var oldValue = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML=oldValue+"2";
  newValue = document.getElementById("answer").innerHTML;
})

document.getElementById("three").addEventListener("click", function() {
  console.log("clicked three");
  var oldValue = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML=oldValue+"3";
  newValue = document.getElementById("answer").innerHTML;
})

document.getElementById("four").addEventListener("click", function() {
  console.log("clicked four");
  var oldValue = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML=oldValue+"4";
  newValue = document.getElementById("answer").innerHTML;
})

document.getElementById("five").addEventListener("click", function() {
  console.log("clicked five");
  var oldValue = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML=oldValue+"5";
  newValue = document.getElementById("answer").innerHTML;
})

document.getElementById("six").addEventListener("click", function() {
  console.log("clicked six");
  var oldValue = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML=oldValue+"6";
  newValue = document.getElementById("answer").innerHTML;
})

document.getElementById("seven").addEventListener("click", function() {
  console.log("clicked seven");
  var oldValue = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML=oldValue+"7";
  newValue = document.getElementById("answer").innerHTML;
})

document.getElementById("eight").addEventListener("click", function() {
  console.log("clicked eight");
  var oldValue = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML=oldValue+"8";
  newValue = document.getElementById("answer").innerHTML;
})

document.getElementById("nine").addEventListener("click", function() {
  console.log("clicked nine");
  var oldValue = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML=oldValue+"9";
  newValue = document.getElementById("answer").innerHTML;
})

//operations keys clear answer bar, set operation type

document.getElementById("add").addEventListener("click", function() {
  console.log("clicked plus");
  first = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML="";
  math = "addition";
})

document.getElementById("subtract").addEventListener("click", function() {
  console.log("clicked minus");
  first = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML="";
  math = "subtraction";
})

document.getElementById("multiply").addEventListener("click", function() {
  console.log("clicked times");
  first = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML="";
  math = "multiplication";
})

document.getElementById("divide").addEventListener("click", function() {
  console.log("clicked divide");
  first = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML="";
  math = "division";
})

document.getElementById("exponent").addEventListener("click", function() {
  console.log("clicked power");
  first = document.getElementById("answer").innerHTML;
  document.getElementById("answer").innerHTML="";
  math = "power";
})

//equal button executes operation and returns answer

document.getElementById("equal").addEventListener("click", function() {
  var second = document.getElementById("answer").innerHTML;
  if (math == "addition") {
    var finalAnswer = parseFloat(first) + parseFloat(second);
  } else if (math == "subtraction") {
    var finalAnswer = parseFloat(first) - parseFloat(second);
  } else if (math == "multiplication") {
    var finalAnswer = parseFloat(first) * parseFloat(second);
  } else if (math == "division") {
    var finalAnswer = parseFloat(first) / parseFloat(second);
  } else if (math == "power") {
    var finalAnswer = Math.pow(first,second);
  }
    document.getElementById("answer").innerHTML=finalAnswer;
    newValue = document.getElementById("answer").innerHTML;
  console.log("solved!");
})
