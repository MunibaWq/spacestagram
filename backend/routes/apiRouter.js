const router = require("express").Router();
const nasaRouter = require("./nasaRoutes");

router.use("/", nasaRouter);

module.exports = router;
