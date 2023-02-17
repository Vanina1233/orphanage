const {
    createUser,
    getUser,
    getUserByEmail,
    getUserById,
    updateUser,
    deleteUser
} = require('../models/user');

const { error } = require('../error');
const { hashGenerator } = require('../utils/hashGenerator');
const { isHash } = require('../utils/compareHash');
const { tokenGenerator } = require('../utils/tokenGenerator');

const getUsersController = (req, res) => {
    getUser((err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ success: 1, users: result });
        }
    });
};

const createUserController = async (req, res) => {
    const body = req.body
    const hash = await hashGenerator(body.hash);
    const data = {...body, hash};
    createUser(data, (err, result) => {
        if(err){
            console.log(err);
            const errRes = error[err.code];
            res.status(404).json({
                success: 0,
                message: 'USER_EXIST',
            });
        }else{
            const token = tokenGenerator(result.id);
            res.json({ success: 1, message: 'User created !', token});
        }
    });
};

const getUserByIdController = (req, res) => {
    const id = req.params.id;
    getUserById(id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ success: 1, user: result });
        } 
    })
}

const deleteUserController = (req, res) => {
    const id = req.params.id;
    deleteUser(id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ success: 1, message: 'DELETED' });
        } 
    })
}

const LoginUserController = async (req, res) => {
    const email = req.body.email;
    const password = req.body.hash;
    getUserByEmail(email, async (err, result) => {
        if(err){
            console.log(err);
        }else{
            const isMatch = await isHash(password, result[0].hash);
            if(isMatch){
                const token = tokenGenerator(result[0].id);
                res.json({success: 1, user: result[0], token});
            }else{
                 res.json({ success: 0, message: 'Unauthorized' });
            }
        }
    })
}

const patchUserController = (req, res) => {
    const data = req.body;
    updateUser(data, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ success: 0 });
        } else {
            res.json({ success: 1, result });
        }
    });
};

module.exports = {
    createUserController,
    getUserByIdController,
    deleteUserController,
    LoginUserController,
    patchUserController,
    getUsersController
}