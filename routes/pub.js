const {
    getPubByIdController,
    getPubController,
    updatePubController,
    deletePubController,
    createPubController
} = require('../controllers/pub');

const {Router} = require('express');

const router = Router();

router.get('/', getPubController);
router.get('/:id', getPubByIdController);
router.post('/', createPubController);
router.delete('/:id', deletePubController);
router.patch('/', updatePubController);

module.exports = router;