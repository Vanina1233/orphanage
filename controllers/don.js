const {
    createDon,
    readDon,
    readDonById,
    deleteDon,
} = require('../models/don');

const getDonController = (req, res) => {
    readDon((err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Dons : result});
        }
    })
}

const createDonController = (req, res) => {
    const data = req.body;
    createDon(data, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Don : result});
        }
    });
}

const getDonByIdController = (req, res) => {
    const id = req.params.id;
    readDonById(id, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Don : result});
        }
    });
}

const deleteDonController = (req, res) => {
    const id = req.params.id;
    deleteDon(id, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, message : 'Don deleted'});
        }
    });
}

module.exports  = {
    getDonByIdController,
    deleteDonController,
    getDonController,
    createDonController
}