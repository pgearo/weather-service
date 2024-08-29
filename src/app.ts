import express, { Application } from 'express';
import cors from 'cors';
import weatherRoutes from './routes/weatherRoutes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('/api', weatherRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

export { app };
export default app;
