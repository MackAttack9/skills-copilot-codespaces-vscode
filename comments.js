// Create web server

// Create web server for comment
//================================================

//Import module
const express = require('express');
const router= express.Router();
const commentController = require('../controllers/commentController');

//Handle request
router.get('/', commentController.index);
router.get('/create', commentController.create);
router.post('/store', commentController.store);
router.get('/:id', commentController.show);
router.get('/:id/edit', commentController.edit);
router.put('/:id', commentController.update);
router.delete('/:id', commentController.destroy);

//Export module
module.exports = router;