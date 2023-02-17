const {
    getPostByIdController,
    getPostController,
    updatePostController,
    deletePostController,
    createPostController
} = require('../controllers/posts');

const {Router} = require('express');

const router = Router();

router.get('/', getPostController);
router.get('/:id', getPostByIdController);
router.post('/', createPostController);
router.delete('/:id', deletePostController);
router.patch('/', updatePostController);

module.exports = router;