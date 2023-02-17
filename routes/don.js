const {
    getDonByIdController,
    getDonController,
    deleteDonController,
    createDonController
} = require('../controllers/don');

const {Router} = require('express');

const router = Router();

router.get('/', getDonController);
router.get('/:id', getDonByIdController);
router.post('/', createDonController);
router.delete('/:id', deleteDonController);

module.exports = router;