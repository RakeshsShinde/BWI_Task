import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './config/connectToDB.js';
import userRouter from './Routes/user.route.js';
import errormiddleware from './middleware/errorMiddleware.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();

const dir = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: './config/.env' })
connectToDB(process.env.MONGO_URL);

app.use('/', express.static(path.join(dir, "uploads")))

app.use('/user', userRouter);
app.use(errormiddleware);

app.listen(process.env.PORT, () => {
    console.log(`server is running on port :${process.env.PORT}`);
})