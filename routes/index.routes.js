const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

module.exports = router;

//authentication routes
router.get("/auth", (req, res, next) => {
  res.json("Authentication Index Route");
});

module.exports = router;


//profile route for user/clients
router.get("/u/home", (req, res, next) => {
  res.json("user (client type) index Route");
});

module.exports = router;

//profile route for user/creative
router.get("/c/home", (req, res, next) => {
  res.json("user (creative) index Route");
});

module.exports = router;