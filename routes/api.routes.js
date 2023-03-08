const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
  res.json("All good in here");
});
// Authentication routes
router.get("/auth", (req, res, next) => {
  res.json("Authentication Index Route");
});
module.exports = router;