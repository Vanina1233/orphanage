const {
    getPaymentByIdController,
    getPaymentController,
    updatePaymentController,
    deletePaymentController,
    createPaymentController
} = require('../controllers/payment');

const {Router} = require('express');

const router = Router();

router.get('/', getPaymentController);
router.get('/:id', getPaymentByIdController);
router.post('/', createPaymentController);
router.delete('/:id', deletePaymentController);
router.patch('/', updatePaymentController);

module.exports = router;