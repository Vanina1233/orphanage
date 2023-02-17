const express = require('express');
const app = express();

const {PrismaContext} = require('./config/prisma');
const env = require('./config/env');

const userRouter = require('./routes/user');
const postRouter = require('./routes/posts');
const pubRouter = require('./routes/pub');
const paymentRouter = require('./routes/payment');
const donRouter = require('./routes/don');

const startServer = async () => {
    const prisma = new PrismaContext
    await prisma.start();

    app.use(express.json());

    app.use('/api/user', userRouter);
    app.use('/api/posts', postRouter);
    app.use('/api/pub', pubRouter);
    app.use('/api/payment', paymentRouter);
    app.use('/api/don', donRouter);


    app.listen(env.port, () => {
        console.log(`server is running on port ${env.port}...`);
    });
};


startServer();
