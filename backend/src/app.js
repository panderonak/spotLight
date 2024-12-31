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

import userRouter from './routes/user.routes.js';

app.use('/api/v1/users', userRouter);

import videoRouter from './routes/video.routes.js';

app.use('/api/v1/videos', videoRouter);

import commentRouter from './routes/comment.routes.js';

app.use('/api/v1/comments', commentRouter);

import playlistRouter from './routes/playlist.routes.js';

app.use('/api/v1/playlist', playlistRouter);

import likeRouter from './routes/like.routes.js';

app.use('/api/v1/likes', likeRouter);

export default app;
