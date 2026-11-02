import 'dotenv/config';

import express from 'express';
import { connectDB } from './config/db.js';

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res) => {
  res.send('You have reached the server of MGSG TMS!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});