import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { REQUEST_PAYLOAD_LIMIT } from './constants.js';

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: REQUEST_PAYLOAD_LIMIT }));

app.use(express.urlencoded({ extended: true, limit: REQUEST_PAYLOAD_LIMIT }));

app.use(express.static('public'));

app.use(cookieParser());

import router from './routes/user.routes.js';

app.use('/api/v1/users', router);

export default app;

// http://localhost:8000/api/v1/users/register
