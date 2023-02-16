const {
    createUser,
    getUser,
    getUserByEmail,
    getUserById,
    updateUser,
    deleteUser
} = require('../models/user')


const createUserController = (req, res) => {
    const data = req.body
    createUser(data, (err, result) => {
        if(err){
            console.log(err);
            res.json({succes : 0, message: "user already exist"});
        }else{
            console.log('user created')
        }
    });
};

module.exports = {
    createUserController
}