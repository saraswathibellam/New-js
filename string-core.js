console.log("----- String Methods -----");
//Length
let str = "Hello Saru";
console.log(str.length);
//Case sensitive
console.log("----- Case Conversion -----");
let text = "Hello";
console.log(text.toLocaleUpperCase());
console.log(text.toLocaleLowerCase());
console.log(text.repeat(3));

//Triming
console.log("----- Triming -----");
let text1 = "  Hi ";
console.log(text1.trim());
console.log(text1.trimEnd());
console.log(text1.trimStart());

//Searching
console.log("----- Searching -----");
let text2 = "Andhra";
console.log(text2.search("hra")); //search element is present it gives +ve
console.log(text2.search("nra")); //search element is not present it gives -ve
console.log(text2.search("ndh"));
console.log();
//Splitting and Reversing
console.log("----- Splitting and Reversing -----");
let text3 = "I am in Bangalore";
console.log(text3.reverse); //undefined
console.log(text3.split(""));
console.log(text3.split(" "));
console.log(text3.split("  "));
console.log(text3.split("").reverse());
console.log(text3.split("").reverse().join(""));
console.log(text3.split("").join());
