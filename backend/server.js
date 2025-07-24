import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';
import resumeRoutes from './routes/resumeRoutes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { connectDB } from './config/db.js';
import userRouter from './routes/userRouter.js';
dotenv.config({ path: '../.env' })
const app = express();
const PORT = 4000;
app.use(cors());

connectDB();

app.use(express.json());
app.use('/api/auth',userRouter)
app.use('/api/resume', resumeRoutes)
app.use(
    '/uploads',
    express.static(path.join(__dirname, 'uploads'),{
        setHeaders: (res,_path)=>{
            res.set('Acess-Control-Allow-Origin','http://localhost:5173')
        }
    })
)

app.get('/',(req,res)=>{
    res.send('API Working')
})
app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})
