const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const createPost = async (data, callback) => {
    try {
        const posts = await prisma.post.create({
            data : data
        });
        callback(null, posts);
    } catch (err) {
        callback(err, null);
    }
}

const readPost = async (callback) => {
    try {
        const posts = await prisma.post.findMany();
        callback(null, posts);
    } catch (err) {
        callback(err, null);
    }
}

const readPostById = async (id, callback) => {
    try {
        const post = await prisma.post.findUnique({
            where : {id}
        });
        callback(null, post);
    } catch (err) {
        callback(err, null);
    }
}

const deletePost = async (id, callback) => {
    try {
        const post = await prisma.post.delete({
            where : {id}
        });
        callback(null, post);
    } catch (err) {
        callback(err, null);
    }
}

const updatePost = async (data, callback) => {
    try {
        const post = await prisma.post.update({
            data : data,
            where : {id : data.id}
        });
        callback(null, post);
    } catch (err) {
        callback(err, null);
    }
}

module.exports = {
    createPost,
    readPost,
    readPostById,
    deletePost,
    updatePost
}
