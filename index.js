const express = require('express');
const app = express();

const {PrismaContext} = require('./config/prisma');
const env = require('./config/env');

const startServer = async () => {
    const prisma = new PrismaContext
    await prisma.start();

    app.use(express.json());

    app.listen(env.port, () => {
        console.log(`server is running on port ${env.port}...`);
    });
};


startServer();
