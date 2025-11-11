/* //Function declaration

function hello() {
  console.log("Say Hello");
}
hello();

//Function Expression
var hello = function () {
  console.log("Say Hi");
};
hello();

function hello(value) {
  console.log("My name is " + value);
}
hello("Saru"); //argument to the function 

function hello(value) {
  return "My name is " + value;
}
let msg = hello("saru");
console.log(msg);*/

function sum(a, b) {
  return a + b;
}
let c = sum(5, 10);
console.log(c);
