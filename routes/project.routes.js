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
      const allPhotoshootProjects = await PhotoshootProject.find()
      console.log('All photoshoot projects :', allPhotoshootProjects)
      res.render('All photoshoot projects', { projects: allPhotoshootProjects })
    } catch (error) {
      console.log('Route to all photoshoot projects', error)
    }
});
  
  // Create a new project
  router.get('/photoshootProjects/new', async (req, res, next) => {
    res.render('New photoshoot projects', { update: false })
  });

  router.post('/photoshootProjects/new', async (req, res) => {
    //const body = req.body
    //console.log(body)
  
    const User = req.session.userId;
  
    await PhotoshootProject.create({
      //...body,
      //description: body.description,
      user: User,
    })
  
    res.redirect('/photoshootProjects')
  })
    
  // Get a specific project by ID
  router.get('/:photoshootProjectId', async (req, res) => {
    const photoshootProjectFound = await PhotoshootProject.findById(req.params.photoshootProjectId).populate('User')
    console.log({ photoshootProjectFound })
    res.render('Specific photoshoot project', { photoshootProjectFound })
  })
  
  // Update a specific property by ID
  router.get('/:photoshootProjectId/edit', async (req, res) => {
    const photoshootProject = await PhotoshootProject.findById(req.params.photoshootProjectId)
    res.render('Update specific project', { photoshootProject, update: true })
  })
  
  router.post('/:photoshootProjectId', async (req, res) => {
    await PhotoshootProject.findByIdAndUpdate(req.params.photoshootProjectId, {
      //...req.body,
      //description: req.body.description,
    })
  
    res.redirect(`/photoshootProjects/${req.params.photoshootProjectId}`)
  })
    
  // Delete a specific property by ID
  router.get('/:photoshootProjectId/delete', async (req, res) => {
    await PhotoshootProject.findByIdAndDelete(req.params.photoshootProjectId)
  
    res.redirect('/photoshootProjects')
  })

module.exports = router;