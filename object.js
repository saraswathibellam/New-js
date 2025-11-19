/* Object 
    Non primitive data type
    store the collective data 
    It is a collection of key - value pair
    Access the object of an object
    */
console.log("----- Object in JavaScript -----");
let board = {
  name: "white Board",
  isavailable: true,
  write: function () {
    console.log("I an able to write");
  },
};
console.log(board.name);
console.log(board.write);
//Employee table
console.log("----- Employee Object -----");
let employee = {
  id: "12345",
  name: "Saru",
  salary: 10000,
  department: "Java Developer",
};
console.log(employee);

console.log("----- Mobile Object -----");
let mobile = {
  brand: "Realme 10Pro",
  color: ["aqua", "black", "blue"],
  storage: ["128GB", "512GB"],
  price: 19999,
};
console.log(mobile);
console.log(mobile.brand);
console.log(mobile["price"]);
mobile.description = "I have a mobile";
console.log(mobile);
mobile.ROM = "8GB";
console.log(mobile);

console.log("----- Nested Object -----");
let person = {
  name: "Saru",
  age: 24,
  email: "saru@gmail",
  address: {
    city: "Bangalore",
    state: "Karnataka",
    pincode: 560037,
  },
};
console.log(person.name);
console.log(person.address.city); //accessing the nesteed object of an object

//for in loop object
console.log("----- For In Loop -----");
for (let key in person) {
  console.log(key);
  console.log(`property ${key} ,
  value ${person[key]}`);
}

//Array of numbers
console.log("----- Array of Numbers -----");
let array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
//Array is also an object
console.log(typeof array);

//Array of objects
console.log("----- Array of Objects -----");
let array1 = [{}, {}, {}]; //array of objects
console.log(array1);

console.log("----- Filtering Products from Array of Objects -----");
let response = [
  { name: "realme 10Pro", company: "realme" },
  { name: "iphone 14", company: "apple" },
  { name: "oneplus 11R", company: "oneplus" },
  { name: "iphone 13", company: "apple" },
  { name: "iphone 12", company: "apple" },
];
console.log(response);
console.log(response.length);

console.log("----- Products from Company -----");
let finalarray = [];
for (let i = 0; i < response.length; i++) {
  console.log(response[i].company);
  if (response[i].company == "apple") {
    finalarray.push(response[i]);
  }
}
console.log(finalarray);

//Object Methods
console.log("----- Object Methods -----");
let obj1 = {
  name: "iphone 14",
  company: "apple",
  price: "$",
};
console.log(Object.keys(obj1)); //get all keys of an object
console.log(Object.values(obj1)); //get all values of an object

console.log(Object.entries(obj1)); //get all entries of an object
console.log();

console.log("----- Merging two objects -----");
let obj2 = {
  name: "oneplus 11R",
  company: "oneplus",
  price: "$$",
};
console.log(Object.assign(obj1, obj2)); //merge two objects

//Hoisting
//Def: moving declarations or functions to the top of the current scope
console.log("----- Hoisting in JavaScript -----");
abc();
function abc() {
  console.log("function");
}

console.log("----- Function Expression -----");
//abc1();
let abc1 = function () {
  console.log("function expression");
};
abc1();

/* function Declaration
Hoisting is applicable

Function Expression
Hoisting is not applicable


 */
console.log("----- Hoisting with Variables -----");
//sum();
function sum() {
  let a = 20;
  let b = 10;
}
console.log(a + b);
sum();
