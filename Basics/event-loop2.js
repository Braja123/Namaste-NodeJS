/**
 * 
Last line of the file.
nextTick
Promise
Timer Expired
setImmediate
File Reading CB
2nd nextTick
2nd setImmediate (Here it print first as after "Poll" phase we have "Check" phase then we have "Close" then again "Timer" phase)
2nd Timer
 * 
 */

const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./notes.txt", "utf8", () => {
  setTimeout(() => console.log("2nd Timer"), 0);

  process.nextTick(() => console.log("2nd nextTick"));

  setImmediate(() => console.log("2nd setImmediate"));

  console.log("File Reading CB");
});

process.nextTick(() => console.log("nextTick"));

console.log("Last line of the file.");
