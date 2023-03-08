/*const Comment = require("../models/Comments.model");
const express = require("express");
const router = express.Router();

// Get all comments for a specific project by ID
router.get("/:projectId/comments", async (req, res) => {
  try {
    const comments = await Comment.find({ projectId: req.params.projectId });
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Create a new comment for a specific project by ID
router.post("/:projectId/comments", async (req, res) => {
  try {
    const { text, user } = req.body;
    const newComment = await Comment.create({
      text,
      user,
      projectId: req.params.projectId,
    });
    console.log(newComment);
    res.status(201).json({ message: "Comment created", comment: newComment });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Get a specific comment by ID
router.get("/:commentId", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      res.status(404).send("Comment not found");
    } else {
      res.json(comment);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Update a specific comment by ID
router.put("/:commentId", async (req, res) => {
  try {
    const { text, user } = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.commentId,
      { text, user },
      { new: true }
    );
    if (!updatedComment) {
      res.status(404).send("Comment not found");
    } else {
      res.json({ message: "Comment updated", comment: updatedComment });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Delete a specific comment by ID
router.delete("/:commentId", async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.commentId);
    if (!deletedComment) {
      res.status(404).send("Comment not found");
    } else {
      res.json({ message: "Comment deleted", comment: deletedComment });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;*/