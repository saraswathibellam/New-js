console.log("----- Looping Statements -----");
console.log("----- while Loop -----");
let i = 1;
while (i < 5) {
  console.log("I have value", i);
  i++;
}

console.log("----- do-while Loop -----");
let j = 1;
do {
  console.log("I have value", j);
  j++;
} while (j < 3);

console.log("----- for Loop  -----");
let n = 5;
for (let i = 1; i <= n; i++) {
  text = " ";
  for (let j = 1; j <= i; j++) {
    text = text + "*";
  }
  console.log(text);
}

console.log("----- for Loop - Star Pattern -----");
let s = 5;
for (let i = 1; i <= s; i++) {
  let text = "*";

  console.log(text.repeat(i));
}

console.log();
