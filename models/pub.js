const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const createPub = async (data, callback) => {
    try {
        const pubs = await prisma.pub.create({
            data : data
        });
        callback(null, pubs);
    } catch (err) {
        callback(err, null);
    }
}

const readPub = async (callback) => {
    try {
        const pubs = await prisma.pub.findMany();
        callback(null, pubs);
    } catch (err) {
        callback(err, null);
    }
}

const readPubById = async (id, callback) => {
    try {
        const pub = await prisma.pub.findUnique({
            where : {id}
        });
        callback(null, pub);
    } catch (err) {
        callback(err, null);
    }
}

const deletePub = async (id, callback) => {
    try {
        const pub = await prisma.pub.delete({
            where : {id}
        });
        callback(null, pub);
    } catch (err) {
        callback(err, null);
    }
}

const updatePub = async (data, callback) => {
    try {
        const pub = await prisma.pub.update({
            data : data,
            where : {id : data.id}
        });
        callback(null, pub);
    } catch (err) {
        callback(err, null);
    }
}

module.exports = {
    createPub,
    readPub,
    readPubById,
    deletePub,
    updatePub
}
