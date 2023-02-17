const {
    createPub,
    readPub,
    readPubById,
    deletePub,
    updatePub
} = require('../models/pub');

const getPubController = (req, res) => {
    readPub((err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Pubs : result});
        }
    })
}

const createPubController = (req, res) => {
    const data = req.body;
    createPub(data, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Pub : result});
        }
    });
}

const getPubByIdController = (req, res) => {
    const id = req.params.id;
    readPubById(id, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Pub : result});
        }
    });
}

const updatePubController = (req, res) => {
    const data = req.body;
    updatePub(data, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Pub : result});
        }
    });
}

const deletePubController = (req, res) => {
    const id = req.params.id;
    deletePub(id, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, message : 'Pub deleted'});
        }
    });
}

module.exports  = {
    getPubByIdController,
    deletePubController,
    updatePubController,
    getPubController,
    createPubController
}