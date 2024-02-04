// create webs erver for comment

// import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// handle request for comment
router.get('/', commentController.getComments);
router.post('/', commentController.addComment);
router.delete('/:id', commentController.deleteComment);
router.put('/:id', commentController.updateComment);

// export module
module.exports = router;