const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const createPayment = async (data, callback) => {
    try {
        const pay = await prisma.paymentMethod.create({
            data : data
        });
        callback(null, pay);
    } catch (err) {
        callback(err, null);
    }
}

const readPayment = async (callback) => {
    try {
        const pay = await prisma.paymentMethod.findMany();
        callback(null, pay);
    } catch (err) {
        callback(err, null);
    }
}

const readPaymentById = async (id, callback) => {
    try {
        const pay = await prisma.paymentMethod.findUnique({
            where : {id}
        });
        callback(null, pay);
    } catch (err) {
        callback(err, null);
    }
}

const deletePayment = async (id, callback) => {
    try {
        const pay = await prisma.paymentMethod.delete({
            where : {id}
        });
        callback(null, pay);
    } catch (err) {
        callback(err, null);
    }
}

const updatePayment = async (data, callback) => {
    try {
        const pay = await prisma.paymentMethod.update({
            data : data,
            where : {id : data.id}
        });
        callback(null, pay);
    } catch (err) {
        callback(err, null);
    }
}

module.exports = {
    createPayment,
    readPayment,
    readPaymentById,
    deletePayment,
    updatePayment
}
