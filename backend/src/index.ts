import express, { Request, Response } from 'express';
import ShoppingItemModel from './model/ShoppingItemModel';
import ShoppingItemRouter from './routes/ShoppingItemRouter';
import connectDB from './config/db';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/items', ShoppingItemRouter);

connectDB();

app.listen('3000', () => {
  console.log(`Server running at http://localhost:3000`);
});