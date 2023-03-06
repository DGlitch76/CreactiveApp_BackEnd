const PhotoshootProject = require("../models/Photoshoot.Project.model");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// Authentication routes
router.get("/api", (req, res, next) => {
  res.json("Authentication Index Route");
});

// Get all projects
router.get('/photoshootProjects', async (req, res) => {
  try {
    const projects = await PhotoshootProject.find();
    res.render('projects', { projects });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Create a new project
router.post('/photoshootProjects', async (req, res) => {
  try {
    const { name, image, description } = req.body;
    const newProject = await PhotoshootProject.create({
      name,
      image,
      description,
    });
    res.redirect('/photoshootProjects');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get a specific project by ID
router.get('/photoshootProjects/:photoshootProjectId', async (req, res) => {
  try {
    const project = await PhotoshootProject.findById(req.params.photoshootProjectId).populate('User');
    if (!project) {
      res.status(404).send('Project not found');
    } else {
      res.render('projectDetail', { project });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Update a specific project by ID
router.post('/photoshootProjects/:photoshootProjectId/update', async (req, res) => {
  try {
    const { name, image, description } = req.body;
    const updatedProject = await PhotoshootProject.findByIdAndUpdate(
      req.params.photoshootProjectId,
      { name, image, description },
      { new: true }
    );
    if (!updatedProject) {
      res.status(404).send('Project not found');
    } else {
      res.redirect(`/photoshootProjects/${req.params.photoshootProjectId}`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Delete a specific project by ID
router.post('/photoshootProjects/:photoshootProjectId/delete', async (req, res) => {
  try {
    const deletedProject = await PhotoshootProject.findByIdAndDelete(req.params.photoshootProjectId);
    if (!deletedProject) {
      res.status(404).send('Project not found');
    } else {
      res.redirect('/photoshootProjects');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;