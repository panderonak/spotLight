import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { REQUEST_PAYLOAD_LIMIT } from './constants';

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

export default app;
