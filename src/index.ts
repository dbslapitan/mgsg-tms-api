import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { companyRoute } from './routes/company.js';
import { staffRoute } from './routes/staff.js';
import { ownerRouter } from './routes/owner.js';

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/v1/company", companyRoute);
app.use("/api/v1/staff", staffRoute);
app.use("/api/v1/owner", ownerRouter);

app.get('/', (req, res) => {
  res.send('You have reached the server of MGSG TMS!');
});

app.listen(port, () => {
  console.log(`[${new Date().toLocaleTimeString()}] Server is running on port ${port}`);
});