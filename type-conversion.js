//Type Conversion
//Implicit type conversion
//Explict type conversion

//implicit
//Automatically done by the JavaScript
console.log("Implicit Conversion");
console.log(10 + "10"); //addition only concatination
console.log(10 - "10");
console.log(10 * "2");

//Explicit
//Manually done by the Developers
console.log("Explicit Conversion");

console.log(Number("123"));
console.log(String(123));
console.log(Boolean("123"));
console.log(Boolean(""));

console.log("-----Type Conversion Examples-----");

let marks = 100;
let name = "Saru";
let cash = 1000;
let employee = "Java Developers";
let isPassed = true;
let result;
let myValue = null;
let bigInt = 100n;
let symbol = Symbol("id");

console.log("-----Type of Values before Conversion-----");

console.log(typeof Number(marks));
console.log(typeof String(name));
console.log(typeof Number(cash));
console.log(typeof String(employee));
console.log(typeof String(isPassed));
console.log(typeof Boolean(result));
console.log(typeof Boolean(myValue));
console.log(typeof String(bigInt));
console.log(typeof String(symbol));

console.log("-----Values after Conversion-----");

console.log("marks :" + marks);
console.log("name :" + name);
console.log("cash :" + cash);
console.log("isPassed :" + isPassed);
console.log("result :" + result);
console.log("myValue :" + myValue);
console.log("bigInt :" + bigInt);
//console.log("symbol :" + symbol);
