var express = require('express');
var router = express.Router();

var ctrlBlogs = require('../controllers/blogs');

router.get('/blog', ctrlBlogs.blogList);
router.post('/blog/add', ctrlBlogs.blogAdd);
router.get('/blog/:blogId', ctrlBlogs.blogFindOne);
router.put('/blog/:blogId', ctrlBlogs.blogEdit);
router.delete('/blog/:blogId', ctrlBlogs.blogDelete);

module.exports = router;
