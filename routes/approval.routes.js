const IllustrationApproval = require("../models/Illustration.Approval.model");
const PhotoshootApproval = require("../models/Photoshoot.Approval.model");
const router = require("express").Router();

// Get all illustration approvals
router.get('/illustrationApprovals', async (req, res) => {
  try {
    const allIllustrationApprovals = await IllustrationApproval.find()
    console.log('All illustration approvals:', allIllustrationApprovals)
    res.render('All illustration approvals', { approvals: allIllustrationApprovals })
  } catch (error) {
    console.log('Route to all illustration approvals', error)
  }
});

// Create a new illustration approval
router.get('/illustrationApprovals/new', async (req, res, next) => {
  res.render('New illustration approval', { update: false })
});

router.post('/illustrationApprovals/new', async (req, res) => {
  //const body = req.body
  //console.log(body)

  const User = req.session.userId;

  await IllustrationApproval.create({
    //...body,
    //description: body.description,
    user: User,
  })

  res.redirect('/illustrationApprovals')
})

// Get all photoshoot approvals
router.get('/photoshootApprovals', async (req, res) => {
  try {
    const allPhotoshootApprovals = await PhotoshootApproval.find()
    console.log('All photoshoot approvals:', allPhotoshootApprovals)
    res.render('All photoshoot approvals', { approvals: allPhotoshootApprovals })
  } catch (error) {
    console.log('Route to all photoshoot approvals', error)
  }
});

// Create a new photoshoot approval
router.get('/photoshootApprovals/new', async (req, res, next) => {
  res.render('New photoshoot approval', { update: false })
});

router.post('/photoshootApprovals/new', async (req, res) => {
  //const body = req.body
  //console.log(body)

  const User = req.session.userId;

  await PhotoshootApproval.create({
    //...body,
    //description: body.description,
    user: User,
  })

  res.redirect('/photoshootApprovals')
})

// Get a specific illustration approval by ID
router.get('/illustrationApprovals/:illustrationApprovalId', async (req, res) => {
  const illustrationApprovalFound = await IllustrationApproval.findById(req.params.illustrationApprovalId).populate('User')
  console.log({ illustrationApprovalFound })
  res.render('Specific illustration approval', { approval: illustrationApprovalFound })
})

// Update a specific illustration approval by ID
router.get('/illustrationApprovals/:illustrationApprovalId/update', async (req, res) => {
  const illustrationApproval = await IllustrationApproval.findById(req.params.illustrationApprovalId)
  res.render('Update specific approval', { approval: illustrationApproval, update: true })
})

router.post('/illustrationApprovals/:illustrationApprovalId', async (req, res) => {
  await IllustrationApproval.findByIdAndUpdate(req.params.illustrationApprovalId, {
    //...req.body,
    //description: req.body.description,
  })

  res.redirect(`/illustrationApprovals/${req.params.illustrationApprovalId}`)
})

// Delete a specific illustration approval by ID
router.get('/illustrationApprovals/:illustrationApprovalId/delete', async (req, res) => {
  await IllustrationApproval.findByIdAndDelete(req.params.illustrationApprovalId)

  res.redirect('/illustrationApprovals')
})

// Get a specific photoshoot approval by ID
router.get('/photoshootApprovals/:photoshootApprovalId', async (req, res) => {
  const photoshootApprovalFound = await PhotoshootApproval.findById(req.params.photoshootApprovalId).populate('User')
  console.log({ photoshootApprovalFound })
  res.render('Specific photoshoot approval', { approval: photoshootApprovalFound })
})

// Update a specific photoshoot approval by ID
router.get('/photoshootApprovals/:photoshootApprovalId/update', async (req, res) => {
  const photoshootApproval = await PhotoshootApproval.findById(req.params.photoshootApprovalId)
  res.render('Update specific approval', { approval: photoshootApproval, update: true })
})

router.post('/photoshootApprovals/:photoshootApprovalId', async (req, res) => {
  await PhotoshootApproval.findByIdAndUpdate(req.params.photoshootApprovalId, {
    //...req.body,
    //description: req.body.description,
  })

  res.redirect(`/photoshootApprovals/${req.params.photoshootApprovalId}`)
})

// Delete a specific photoshoot approval by ID
router.get('/photoshootApprovals/:photoshootApprovalId/delete', async (req, res) => {
  await PhotoshootApproval.findByIdAndDelete(req.params.photoshootApprovalId)

  res.redirect('/photoshootApprovals')
})

module.exports = router;