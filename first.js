console.log("My first code");
//var can be redeclared or can be redefined
//Can be accessed before initialized
console.log("----- var Variable -----");
var name = "Saru";
var name = "Naga";
name = "Pushpa";
console.log(name);

//let can be declared but can't be redefined
//Cannot be accessed before initialized
//Referenced error will get is called Temperal Dead Zone
//ReferenceError: Cannot access 'x' before initialization

console.log("----- let Variable -----");
let city = "Andhra";
city = "Bglr";
console.log(city);

//const can't be redeclared and redefined
//Cannot be accessed before initialized
//ReferenceError: Cannot access 'country' before initialization

console.log("----- const Variable -----");

const country = "India";
//const country;
//console.log(country);

console.log("----- Function Example -----");
function hello() {
  console.log("First Function ");
}

hello();
