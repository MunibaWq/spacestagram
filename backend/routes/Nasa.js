const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Picture: #1");
});

module.exports = router;
