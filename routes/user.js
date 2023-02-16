const {Router} = require('express');
const {
    createUserController
} = require('../controllers/user')

const router = Router();

router.post('/', createUserController);

module.exports = router;