//Loxical Scope
//Globally available throughtout my life
let name = "Amar"; //global scope
function outer() {
  //console.log(name);
  let name1 = "Akbar"; //local scope and block scope
  //console.log(name1);

  function inner() {
    let name2 = "Anthony";
    console.log(name);
    console.log(name1);
    console.log(name2); //nested scope
  }
  inner();
}
// console.log(name);
// console.log(name1);
outer();
