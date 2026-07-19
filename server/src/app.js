import express from 'express';
import testRoutes from './routes/testRoutes.js';
import userRoutes from './routes/userRoutes.js';



const app = express();
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api', testRoutes);

export default app;