const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./notes.txt", "utf8", () => {
  // Here as it has high priority than "timeout" but it takes time to load that's why executes at last
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer Expired"), 0);

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last line of the file");
