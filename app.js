require("./xyz.js"); // here first "xyz.js" file run then next code run
// const calculateSum = require("./calculate/sum.js");
// const { calculateMultiply } = require("./calculate/multiply.js");

const util = require("node:util"); // util is available in code node js

const { calculateSum, calculateMultiply } = require("./calculate");
const data = require("./data.json");
console.log(data);

var a = 10;
var b = 20;

calculateSum(a, b);
calculateMultiply(a, b);

const name = "gopal";
console.log(name);
// console.log(global);
