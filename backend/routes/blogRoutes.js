const express = require('express');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();
const {
    createBlog,
    getBlogs,
    getUserBlogs,
    getBlog,
    deleteBlog,
    updateBlog
} = require('../controllers/blogController');


// GET all Blogs
router.get('/', getBlogs)

// GET all Blogs by a user
router.get('/user', getUserBlogs)

//GET a single Blog
router.get('/:id', getBlog)

//require authentication for all routes below
router.use(requireAuth);

//POST a new Blog
router.post('/', createBlog)

//DELETE a Blog
router.delete('/:id', deleteBlog)

// UPDATE a Blog
router.patch('/:id', updateBlog)

module.exports = router