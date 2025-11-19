console.log("----- Template Literals -----");
let name = "Saru";
let message = `My name is ${name}`;
console.log(message);

console.log("----- Multiline Template Literals -----");
let city = "Bangalore";
//template literal using back ticks
let message1 = `My name is ${name}
I am staying in ${city}`;
console.log(message1);

//normal method using double or single quotes
console.log("----- Multiline Normal Strings -----");
console.log("My name is " + name + "\n" + "I am staying in " + city);
