const router = require("express").Router();
const nasaRouter = require("./Nasa");

router.use("/nasa", nasaRouter);

module.exports = router;
