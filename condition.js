//Conditions
//if condition
console.log("----- If condition -----");
function marks(value) {
  if (value >= 10) {
    console.log("If statement is true");
  }
}
marks(10);

//if-else condition
console.log("----- If-Else condition -----");
function isEligible(value) {
  if (value >= 18) {
    console.log("Eligible to drive 4 wheeler");
  } else {
    console.log("Not Eligible");
  }
}
isEligible(17);

//if elseif else condition
/* write a JS function that accepts String as a input 
type->"Tier 1" 
"Tier 2" 
"Tier 3"

console.log("I will get a package of 10LPA");
console.log("I will get a package of 7LPA");
console.log("I will get a package of 5LPA");

 */
console.log("----- If-ElseIf-Else condition -----");
function pack(type) {
  if (type == "Tier 1") {
    console.log("I will get a package of 10LPA");
  } else if (type == "Tier 2") {
    console.log("I will get a package of 7LPA");
  } else if (type == "Tier 3") {
    console.log("I will get a package of 5LPA");
  } else {
    console.log("No Job");
  }
}
pack("Tier 2");

//switch case condition
console.log("----- Switch Case condition -----");
let type = "Tier 1";
switch (type) {
  case "Tier ":
    console.log("I will get a package of 10LPA");
    break;
  case "Tier 2":
    console.log("I will get a package of 7LPA");
    break;
  case "Tier 3":
    console.log("I will get a package of 5LPA");
    break;
  default:
    console.log("No Job");
    break;
}
