//Function declaration
console.log("----- Function Declaration -----");
function hello() {
  console.log("Say Hello");
}
hello();

//Function Expression
console.log("----- Function Expression -----");
var hello1 = function () {
  console.log("Say Hi");
};
hello1();

//Function with parameter and argument
console.log("----- Function with Parameter and Argument -----");
function hello2(value) {
  console.log("My name is " + value);
}
hello2("Saru"); //argument to the function

//Function with return type
console.log("----- Function with Return Type -----");
function hello3(value) {
  return "My name is " + value;
}
let msg = hello3("pushpa");
console.log(msg);

//Function to add two numbers
console.log("----- Function to Add Two Numbers -----");
function sum(a, b) {
  return a + b;
}
let c = sum(5, 10);
console.log(c);

//Arrow Function
console.log("----- Arrow Function -----");
const abc = () => {
  console.log("function");
};
abc();

//with parameter and return type
console.log("----- Arrow Function with Parameter and Return Type -----");
const sum1 = (a, b) => {
  return a + b;
};
let value = sum1(5, 10);
console.log(value);

//is logic single line specifically we don't need return statement and curly braces
console.log("----- Arrow Function Single Line -----");
const sum2 = (a, b) => a + b;
let value1 = sum2(10, 20);
console.log(value1);
