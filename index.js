const express = require('express');
const app = express();

const {PrismaContext} = require('./config/prisma');
const env = require('./config/env');

const userRouter = require('./routes/user')

const startServer = async () => {
    const prisma = new PrismaContext
    await prisma.start();

    app.use(express.json());

    app.use('/api/user', userRouter);


    app.listen(env.port, () => {
        console.log(`server is running on port ${env.port}...`);
    });
};


startServer();
