import express from 'express';
import cookieParser from 'cookie-parser';

import path from 'node:path';

import routes from './routes/index.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use('/uploads', express.static(path.resolve('src', 'uploads')));

app.use(cookieParser());

// app.use(express.json());

app.use(routes);

//Hendle 404 Error
app.use(notFoundHandler);

//Handle Application Error
app.use(errorHandler);

export default app;

// mongodb+srv://mharchenko:VflFhYzuslkohH2w@cluster0.p6aqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
