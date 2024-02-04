// Create Web Server for comments
// Create and delete comments
// Update comments

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const User = require('../models/user');
const auth = require('../middleware/auth');

// Create a comment
router.post('/create', auth, async (req, res) => {
    try {
        // Check if the user exists
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        // Create a comment
        const comment = new Comment({
            ...req.body,
            owner: req.user.id
        });
        await comment.save();
        res.status(201).send(comment);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Get comments for a post
router.get('/post/:id', auth, async (req, res) => {
    try {
        const comments = await Comment.find({ post: req.params.id });
        res.status(200).send(comments);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Update a comment
router.patch('/update/:id', auth, async (req, res) => {
    try {
        const comment = await Comment.findOne({ _id: req.params.id, owner: req.user.id });
        if (!comment) {
            return res.status(404).send({ error: 'Comment not found' });
        }
        comment.text = req.body.text;
        await comment.save();
        res.status(200).send(comment);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Delete a comment
router.delete('/delete/:id', auth, async (req, res) => {
    try {
        const comment = await Comment.findOne({ _id: req.params.id, owner: req.user.id });
        if (!comment) {
            return res.status(404).send({ error: 'Comment not found' });
        }
        await comment.remove();
        res.status(200).send(comment);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;