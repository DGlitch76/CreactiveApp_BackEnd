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
router.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.render('/api/projects', { projects });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Create a new project
router.post('/api/project/new', async (req, res) => {
  try {
    const { name, image, description } = req.body;
    const newProject = await PhotoshootProject.create({
      name,
      image,
      description,
    });
    res.status(201).json(newProject);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get a specific project by ID
router.get('/api/projects/:projectId', async (req, res) => {
  try {
    const project = await PhotoshootProject.findById(req.params.photoshootProjectId).populate('User');
    if (!project) {
      res.status(404).send('Project not found');
    } else {
      res.render(`/api/projects/${req.params.ProjectId}`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Update a specific project by ID
router.post('/api/projects/:projectId/update', async (req, res) => {
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
      res.redirect(`/api/projects/${req.params.ProjectId}`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Delete a specific project by ID
router.post('/api/projects/:projectId/delete', async (req, res) => {
  try {
    const deletedProject = await PhotoshootProject.findByIdAndDelete(req.params.photoshootProjectId);
    if (!deletedProject) {
      res.status(404).send('Project not found');
    } else {
      res.redirect('/api/projects');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;