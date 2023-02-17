const {Router} = require('express');
const {
    createUserController,
    LoginUserController,
    patchUserController,
    getUserByIdController,
    getUsersController,
    deleteUserController
} = require('../controllers/user')

const router = Router();


router.get('/:id', getUserByIdController);
router.get('/', getUsersController);
router.post('/login', LoginUserController);
router.patch('/', patchUserController);
router.post('/register', createUserController);
router.delete('/:id', deleteUserController);

module.exports = router;