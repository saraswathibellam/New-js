//closure - invoke of expired outer function
function outer() {
  let name = "Ramesh";
  name = "Kamesh";
  console.log(name);

  function inner() {
    let name1 = "Suresh";
    console.log(name1);
    console.log("--------");
  }
  console.log("Returning inner function");
  return inner;
}
console.log("Invoking outer function");
let value = outer();
value();
value();
value();
