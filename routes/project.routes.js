const Project = require("../models/Project.model");
const uploader = require('../middleware/cloudinary.config');
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
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.render('projects', { projects });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Create a new project
router.post('/new', uploader.single("imageUrl"), async (req, res, next) => {
  if (!req.file) {
    res.status(200).json({ message: "no image" });
  } else {
    try {
      const { name, description } = req.body;
       
      const newProject = await Project.create({
        name: req.body.name,
        images: [req.file.path],
        description: req.body.description,
        // owner:req.session.user, DECODE TOKEN - GET USER ID --- SEND TO PROJECT
      });
      console.log(newProject);
      res.status(201).json({ message: 'Project created', project: newProject });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  }
});

// Get a specific project by ID
router.get('/:projectId', async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      res.status(404).send('Project not found');
    } else {
      res.status(201).json({ message: 'Project found', project });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Update a specific project by ID
router.get('/updated/:projectId', async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      res.status(404).send('Project not found');
    } else {
      console.log(project)
      res.status(201).json({ message: 'Project found', project });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.post('/:projectId/update', async (req, res) => {
  try {
    const { name, image, description } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.projectId,
      { name, image, description },
      { new: true }
    );
    if (!updatedProject) {
      res.status(404).send('Project not found');
    } else {
      res.status(201).json({ message: 'Project updated', project: updatedProject });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Delete a specific project by ID
router.delete('/:projectId', async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.projectId);
    if (!deletedProject) {
      res.status(404).send('Project not found');
    } else {
      res.status(200).json({ message: 'Project deleted', project: deletedProject });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;