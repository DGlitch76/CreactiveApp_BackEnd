const express = require("express");
const router = express.Router();

// Authentication routes
router.get("/Ayrshare", (req, res, next) => {
  res.json("Authentication Index Route");
});
module.exports = router;