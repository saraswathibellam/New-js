//var is function scoped or can access the value outside the block
console.log("----- Function Scope Example -----");
{
  var name = "saru";
  console.log(name);
}
console.log(name);
//let & const are blocked scope or can't the value outside the block
console.log("----- Block Scope Example -----");
{
  let name = "naga";
  console.log(name);
}
