const express = require("express");

const app = express();

// Request Handler
app.use("/hello", (req, res) => {
  res.send("Hello Hello Hello");
});
app.use("/test", (req, res) => {
  res.send("Hello from the server");
});
app.use("/helen", (req, res) => {
  res.send("Hello Helen");
});

// Server is created
app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
