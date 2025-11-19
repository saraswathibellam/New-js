//set time out delayed response or delayed execute after time out
console.log("----- setTimeout  -----");

setTimeout(() => {
  console.log("I have a data");
}, 1000);

//set interval repeated response or execute b/w Inverval
console.log("----- setInterval  -----");
setInterval(() => {
  console.log("Hello every 2 seconds");
}, 5000);
