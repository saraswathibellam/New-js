let array = [1, "saru", true];
console.log(array);
array.push(6);
console.log(array);
array.pop();
console.log(array);

let data = new Array(1, 2, 3, 4);
console.log(data);
data.push(6);
console.log(data);

let color = ["yellow", "blue", "green", "black", "white"];

console.log(color);
color.push("pink");
console.log(color);
color.pop();
console.log(color);
color.shift();
console.log(color);
color.unshift("purple");
console.log(color);
console.log(color.indexOf("green"));
console.log(color.sort());
console.log(color.sort().reverse());
color.splice(1, 2);
console.log(color);
let value = color.splice(0, 2, "blue", "green");
console.log(color);
console.log(value);

//Concatenation of two arrays
console.log("-----Concatenation of two arrays-----");
let color1 = ["yellow"];
let key = ["Honda"];
let value1 = color1.concat(key);
console.log(value1);
let color2 = ["red", "blue"];
for (let i = 0; i < color2.length; i++) {
  console.log(color2[i]);
}

//Js Program largest world in a string
console.log("----- Largest word in a string-----");
let string = "I am attending js class in Besant";
let string1 = string.split(" ");
console.log(string1);
let largest = "";
for (let i = 0; i < string1.length; i++) {
  if (string1[i].length > largest.length) {
    largest = string1[i];
  }
}
console.log(largest);
console.log(largest.length);
