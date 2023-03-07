const Project = require("../models/Project.model");
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
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.render('projects', { projects });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Create a new project
router.post('/projects', async (req, res) => {
  try {
    const { name, image, description } = req.body;
    const newProject = await Project.create({
      name,
      image,
      description,
    });
    res.redirect('/projects');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get a specific project by ID
router.get('/projects/:projectId', async (req, res) => {
  try {
    const project = await Project.findById(req.params.ProjectId).populate('User');
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
router.post('/projects/:projectId/update', async (req, res) => {
  try {
    const { name, image, description } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.ProjectId,
      { name, image, description },
      { new: true }
    );
    if (!updatedProject) {
      res.status(404).send('Project not found');
    } else {
      res.redirect(`/projects/${req.params.ProjectId}`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Delete a specific project by ID
router.post('/projects/:projectId/delete', async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.ProjectId);
    if (!deletedProject) {
      res.status(404).send('Project not found');
    } else {
      res.redirect('/projects');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;