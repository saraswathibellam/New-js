//reverse star pattern
console.log("----- Reverse star pattern 5 to 1-----");
let s1 = 5;
for (let i = s1; i >= 0; i--) {
  let text = "*";
  console.log(text.repeat(i));
}
console.log();

//factorial
console.log("----- Factorial of 5 -----");
let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log("factorialof 5: ", factorial);

//diamond star pattern
console.log("-----Right Half Diamond star pattern -----");
let star = 5;
for (let i = 1; i <= star; i++) {
  let text = "*";
  console.log(text.repeat(i));
}
for (let j = star - 1; j >= 1; j--) {
  let text = "*";
  console.log(text.repeat(j));
}

console.log();

//pyramid star pattern
console.log("-----Left Half Diamond star pattern -----");

let star1 = 5;
for (let i = 1; i <= star1; i++) {
  let text1 = " ";
  for (let j = 1; j <= star1 - i; j++) {
    text1 += " ";
  }
  for (let k = 1; k <= i; k++) {
    text1 += "*";
  }
  console.log(text1);
}
for (let i = star1 - 1; i >= 1; i--) {
  let text2 = " ";
  for (let j = 1; j <= star1 - i; j++) {
    text2 += " ";
  }
  for (let k = 1; k <= i; k++) {
    text2 += "*";
  }
  console.log(text2);
}

// bangalore char counting
console.log("----- Character counting in 'bangalore' -----");
let letter = "bangalore";
let letter1 = letter.split("");
let charCount = {};

for (let i = 0; i < letter1.length; i++) {
  let char = letter1[i];
  if (charCount[char]) {
    charCount[char]++;
  } else {
    charCount[char] = 1;
  }
}
console.log(charCount);

// print even and odd numbers between 1 to 20
console.log("----- Even and Odd numbers between 1 to 20 -----");
let numbers = 20;
let even = "";
let odd = "";
for (let i = 1; i <= numbers; i++) {
  if (i % 2 == 0) {
    even += i + " ";
  } else {
    odd += i + " ";
  }
}
console.log(even);
console.log(odd);

//write a JS program
//I/p: let array=[1,2,3,4,5];
//let final=5;
//O/P: [[0,3],[1,2]]
console.log("----- Pairs of indices whose elements sum to 5-----");
let array = [1, 2, 3, 4, 5];
let final = 5;
let output = [];
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] == final) {
      output.push([i, j]);
    }
  }
}
console.log(output);

//write a JS program
//I/p: let array=[1,0,0,0,0,0,1];
//let tree=2
//O/P:true
console.log("----- Planting trees -----");
let array2 = [1, 0, 0, 0, 0, 0, 1];
let tree = 2;
let count = 0;
for (let i = 0; i < array2.length; i++) {
  if (array2[i] == 0) {
    let prevvalue = array2[i - 1];
    let nextvalue = array2[i + 1];
    if (prevvalue == 0 && nextvalue == 0) {
      array2[i] = 1;
      count++;
    }
  }
}
console.log(tree == count);

//Another approach
console.log("----- Another approach -----");

let array3 = [0, 0, 1, 0, 0, 0, 0, 0, 1];
let tree2 = 3;
let count2 = 0;
for (let i = 0; i < array3.length; i++) {
  if (array3[i] == 0) {
    let prevvalue = i == 0 ? 1 : array3[i - 1];
    let nextvalue = i == array3.length - 1 ? 0 : array3[i + 1];
    if (prevvalue == 0 && nextvalue == 0) {
      array3[i] = 1;
      count2++;
    }
  }
}
console.log(tree2 == count2);

//Js Program to return the possibility of climbing stairs
//I/p: let n=5;
//O/P: 8
console.log("----- Climbing stairs -----");
let m = 5;
first = 1;
second = 2;
for (i = 3; i <= m; i++) {
  third = first + second;
  first = second;
  second = third;
}
console.log(third);
