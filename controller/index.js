const router = require("express").Router();

router.use("/", require("./homeRoutes"));

router.use("/api", require("./api"));

mondule.exports = router;
