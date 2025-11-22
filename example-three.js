function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("I have conter: " + count);
    console.log("--------");
  }
  inner();
}
outer();
outer();
