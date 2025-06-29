import express from 'express';
import cors from 'cors';
import { initTRPC } from '@trpc/server';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './approuter';

const t = initTRPC.create();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Allow credentials
}));

app.use('/trpc', createExpressMiddleware({
  router: appRouter,
}));


app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
})