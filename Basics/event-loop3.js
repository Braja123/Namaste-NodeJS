/**
 * Last line of the file.
 * nextTick
 * inner nextTick
 * Promise
 * Timer Expired
 * setImmediate
 * File Reading CB
 */

const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./notes.txt", "utf8", () => {
  console.log("File Reading CB");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("nextTick");
});

console.log("Last line of the file.");
