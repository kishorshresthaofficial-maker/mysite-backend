import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './database.js';
import cors from 'cors';
import eventRoutes from './routes/eventRoutes.js';
import eventCategoryRoutes from './routes/eventCategoryRoutes.js';
import weddingRoutes from './routes/weddingRoutes.js'
import authRoute from './routes/authRoute.js';

dotenv.config();    
connectDB();    
const PORT = process.env.PORT || 3000;
process.env.MONGODB_URL = process.env.MONGODB_URL;


const app = express();
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.send('My Dashboard!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/event', eventRoutes);
app.use('/eventCategory', eventCategoryRoutes);

app.use('/weddingsnaps', weddingRoutes);
app.use('/auth', authRoute)