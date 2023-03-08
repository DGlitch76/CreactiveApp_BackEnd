const router = require("express").Router();
const Project = require("../models/Project.model");
const User = require("../models/User.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});
//PROJECTS routes
router.get("/projects", async (req, res, next) => {
  const allProjects = await Project.find()
  res.json(allProjects);
});
//USERS routes
router.get("/users", async (req, res, next) => {
  const allUsers = await User.find()
  res.json(allUsers)
});

module.exports = router;