const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});



//authentication routes
router.get("/api", (req, res, next) => {
  res.json("Authentication Index Route");
});






module.exports = router;