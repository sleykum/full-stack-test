import express from 'express';
import ShoppingItemRouter from './routes/ShoppingItemRouter';
import connectDB from './config/db';
import cors from 'cors';
import dotenv from 'dotenv' 

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/items', ShoppingItemRouter);

connectDB();

app.listen(process.env.PORT!, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});