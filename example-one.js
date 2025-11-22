function outer() {
  let name = "Ramesh";
  console.log(name);
  function inner() {
    let name1 = "Suresh";
    console.log(name1);
    console.log("--------");
  }
  inner();
}
outer();
outer();
outer();
