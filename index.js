import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import indexRouter from './routes/index.route.js';
import seed from './db/seed.db.js';
import { createAdminUser } from './controllers/auth.controller.js';

import errorHandler from './middlewares/errorHandler.middleware.js';

dotenv.config();

// Connection and generation of the database
mongoose
  .connect(process.env.MONGO)
  .then(async () => {
    console.log('Conectado a MongoDB');
    await seed();
    await createAdminUser();
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', indexRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

// Middleware to handle 404 errors
// app.use((req, res, next) => {
//   const err = new Error(`Path not Found: ${req.method} ${req.originalUrl}`);
//   err.status = 404;
//   next(err);
// });

// Middleware to handle errors
app.use(errorHandler);

export default app;
