let i = 1;
while (i < 5) {
  console.log("I have value", i);
  i++;
}

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

let m = 5;
for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("*");
  }
  console.log();
}
