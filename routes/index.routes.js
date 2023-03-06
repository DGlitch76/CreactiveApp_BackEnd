const router = require("express").Router();
const PhotoshootProject = require("../models/Photoshoot.Project.model");
const User = require("../models/User.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//authentication routes
// router.get("/auth", (req, res, next) => {
//   res.json("Authentication Index Route");
// });

//PHOTOSHOOTS routes
router.get("/projects", async (req, res, next) => {
  const allProjects = await PhotoshootProject.find()
  res.json(allProjects);
});

//USERS routes
router.get("/users", async (req, res, next) => {
  const allUsers = await User.find()
  res.json(allUsers)
});





module.exports = router;