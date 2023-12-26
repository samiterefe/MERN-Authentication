import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import useRoutes from './routes/user.route.js';

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, ()=>{
    console.log("server listening on port 3000");
});

app.use('/api/user', useRoutes)