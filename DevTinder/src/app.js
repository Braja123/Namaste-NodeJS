const express = require("express");

const app = express();

// // This will only take HTTP GET method
// app.get("/user", (req, res) => {
//   res.send({ firstName: "San", lastName: "Das" });
// });

// app.post("/user", (req, res) => {
//   res.send("Data Successfully Saved to database");
// });

// app.delete("/user", (req, res) => {
//   res.send("Deleted Succesfully");
// });

// // Request Handler
// // This will match all the HTTP method API calls to /test
// app.use("/test", (req, res) => {
//   res.send("Hello from the server");
// });

// This means first write "ab" then write anything in between "cd" it will work. Ex: http://localhost:3000/abkksjdhfkjshdkfjcd
// app.get("/ab*cd", (req, res) => {
//   res.send({ firstName: "San", lastName: "Das" });
// });

// This means any path we use if "a" comes inside it than that will work. Ex: http://localhost:3000/bcad
// app.get(/a/, (req, res) => {
//   res.send({ firstName: "San", lastName: "Das" });
// });

// This means any path starts with anything but ends with "fly" than that will work. Ex: http://localhost:3000/butterfly
// app.get(/.*fly$/, (req, res) => {
//   res.send({ firstName: "San", lastName: "Das" });
// });

app.get("/user", (req, res) => {
  // http://localhost:3000/user?userId=101&password="test"
  console.log(req.query); // This is how we read the query Parameter
  res.send({ firstName: "San", lastName: "Das" });
});

// This : means dynamic routes
app.get("/user/:userId/:name/:password", (req, res) => {
  // Ex: http://localhost:3000/user/777
  console.log(req.params); // This is how we read the query Parameter
  res.send({ firstName: "San", lastName: "Das" });
});

// Server is created
app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
