const router = require("express").Router();
const nasaRouter = require("./nasaRoutes");

router.use("/nasa", nasaRouter);

module.exports = router;
