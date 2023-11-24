import  express  from "express";
import authRoutes from './router/authRouter.js';
import connectDB from "./config/db.js";
import dotenv from 'dotenv';

dotenv.config({path: './config.env'});




const app = express();

app.use(express.json());

dotenv.config();
connectDB();

app.use('/api/v1/auth' , authRoutes)

app.listen(8080 , () => {
    console.log('server is running 8080');
});
