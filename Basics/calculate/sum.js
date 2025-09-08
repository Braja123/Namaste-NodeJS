// Module protects their variables and functions from leaking

console.log("inside Sum");
function calculateSum(a, b) {
  let sum = a + b;
  console.log(sum);
}

module.exports = { calculateSum };
// module.exports = { x: x, calculateSum: calculateSum };   // This is how we can export multiple things

// console.log(module.exports) // {}
// module.exports = x;
// module.exports = calculateSum;
