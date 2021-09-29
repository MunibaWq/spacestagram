const express = require("express");
const app = express();
const apiRouter = require("./routes/apiRouter");

app.listen(5000, () => {
  console.log("express server is running on port 5000");
});

app.use("/api", apiRouter);
