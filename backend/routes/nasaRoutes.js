const express = require("express");
const router = express.Router();
const axios = require("axios");

require("dotenv").config();

router.get("/nasa", async (req, res, next) => {
  try {
    let response = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&`,
      {
        params: {
          api_key: process.env.REACT_APP_NASA_API_KEY,
        },
      }
    );
    // console.log(response.data);
    res.send(response.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
