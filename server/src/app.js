import express from 'express';
import testRoutes from './routes/testRoutes.js';



const app = express();

app.use('/api', testRoutes);


export default app;