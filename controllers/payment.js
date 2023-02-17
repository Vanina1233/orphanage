const {
    createPayment,
    readPayment,
    readPaymentById,
    deletePayment,
    updatePayment
} = require('../models/payment');

const getPaymentController = (req, res) => {
    readPayment((err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Payments : result});
        }
    })
}

const createPaymentController = (req, res) => {
    const data = req.body;
    createPayment(data, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Payment : result});
        }
    });
}

const getPaymentByIdController = (req, res) => {
    const id = req.params.id;
    readPaymentById(id, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Payment : result});
        }
    });
}

const updatePaymentController = (req, res) => {
    const data = req.body;
    updatePayment(data, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Payment : result});
        }
    });
}

const deletePaymentController = (req, res) => {
    const id = req.params.id;
    deletePayment(id, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, message : 'Payment deleted'});
        }
    });
}

module.exports  = {
    getPaymentByIdController,
    deletePaymentController,
    updatePaymentController,
    getPaymentController,
    createPaymentController
}