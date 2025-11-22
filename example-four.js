//closure example-closure retains access to outer function's variables or closure scope even after the outer function has finished executing
//closure is a fn that will be retain outer variable even after outer function execution is completed
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("I have conter: " + count);
    console.log("--------");
  }
  return inner;
}
let value = outer();
value();
value();
value();

//addMoney is a fn that will be retain the amount even after my bank get closed
console.log("-----New Closure Instance Example-------");
function outer1() {
  let amount = 1000;
  function addMoney(moneyValue) {
    amount += moneyValue;
    console.log("I have amout: " + amount);
    console.log("--------");
  }
  return addMoney;
}
let moneyValue = outer1();
moneyValue(1000);
moneyValue(1000);
// moneyValue();
