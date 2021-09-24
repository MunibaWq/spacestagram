const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Express here");
});

app.listen(5000, () => {
  console.log("express server is running on port 5000");
});
