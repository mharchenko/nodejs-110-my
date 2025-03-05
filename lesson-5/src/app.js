import express from 'express';

import routes from './routes/index.js';

const app = express();

app.use(routes);

export default app;

// mongodb+srv://mharchenko:VflFhYzuslkohH2w@cluster0.p6aqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
