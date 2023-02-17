const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const createDon = async (data, callback) => {
    try {
        const don = await prisma.don.create({ data : data});
        callback(null, don);
    } catch (err) {
        callback(err, null);
    }
}

const readDon = async (callback) => {
    try {
        const don = await prisma.don.findMany();
        callback(null, don);
    } catch (err) {
        callback(err, null);
    }
}

const readDonById = async (id, callback) => {
    try {
        const don = await prisma.don.findUnique({
            where : {id}
        });
        callback(null, don);
    } catch (err) {
        callback(err, null);
    }
}

const deleteDon = async (id, callback) => {
    try {
        const don = await prisma.don.delete({
            where : {id}
        });
        callback(null, don);
    } catch (err) {
        callback(err, null);
    }
}

module.exports = {
    createDon,
    readDon,
    readDonById,
    deleteDon,
}
