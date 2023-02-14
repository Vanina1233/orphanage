const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async (data, callback) => {
    try {
        const user = await prisma.user.create({
            data : data
        });
        callback(null, user);
    } catch (err) {
        callback(err, null);
    }
}

const getUser = async (callback) => {
    try {
        const users = await prisma.user.findMany();
        callback(null,users);
    } catch (err) {
        callback(err, null);
    }
}

const getUserById = async (id, callback) => {
    try {
        const user = await prisma.user.findUnique({
            where : {id}
        });
        callback(null, user);
    } catch (err) {
        callback(err, null)
    }
}

const getUserByEmail = async (email, callback) => {
    try {
        const user = await prisma.user.findUnique({
            where : {email}
        });
        callback(null, user);
    } catch (err) {
        callback(err, null);
    }
}

const updateUser = async (data, callback) => {
    try {
        const user = await prisma.user.update({
            data : data,
            where : {id : data.id}
        });
        callback(null, user);
    } catch (err) {
        callback(err, null);
    }
}

const deleteUser = async (id,callback) => {
    try {
        const user = await prisma.user.delete({where : {id}});
        callback(null, user);
    } catch (err) {
        callback(err, null);
    }
}

module.exports = {
    createUser,
    getUser,
    getUserByEmail,
    getUserById,
    updateUser,
    deleteUser
}