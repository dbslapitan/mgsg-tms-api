import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { companyRoute } from './routes/company.js';

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/v1/company", companyRoute);

app.get('/', (req, res) => {
  res.send('You have reached the server of MGSG TMS!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});