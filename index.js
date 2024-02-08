import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import submitRoute from './routes/submission.route.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config({
    path: './.env'
})
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

const port = 3000

app.use('/', submitRoute);

app.listen(port || 3000, ()=>{
    console.log(`Server started at port: ${port}`);
})