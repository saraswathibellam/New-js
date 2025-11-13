//Case sensitive
let text = "Hello";
console.log(text.toLocaleUpperCase());
console.log(text.toLocaleLowerCase());
console.log(text.repeat(3));

//Triming
let text1 = "  Hi ";
console.log(text1.trim());
console.log(text1.trimEnd());
console.log(text1.trimStart());

//Searching
let text2 = "Andhra";
console.log(text2.search("hra")); //search element is present it gives +ve
console.log(text2.search("nra")); //search element is not present it gives -ve
console.log(text2.search("ndh"));
console.log();
let text3 = "I am in Bangalore";
console.log(text3.reverse); //undefined
console.log(text3.split(""));
console.log(text3.split(" "));
console.log(text3.split("  "));
console.log(text3.split("").reverse());
console.log(text3.split("").reverse().join(""));
console.log(text3.split("").join());

let n = 5;
for (let i = 1; i <= n; i++) {
  text = " ";
  for (let j = 1; j <= i; j++) {
    text = text + "*";
  }
  console.log(text);
}

let s = 5;
for (let i = 1; i <= s; i++) {
  let text = "*";
  console.log(text.repeat(i));
}
console.log();
