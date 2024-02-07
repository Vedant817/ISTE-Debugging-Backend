import express from 'express';
import cors from 'cors';
import submitRoute from './routes/submission.route.js'

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000

app.use('/', submitRoute);

app.listen(port || 3000, ()=>{
    console.log(`Server started at port: ${port}`);
})