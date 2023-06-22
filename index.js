import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import DB_connection from './config/db.js';
import route from './routes/routes.js';
import { Auth } from './middleware/auth.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser())
const PORT = 8000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

DB_connection();

app.listen(PORT, () => {
    console.log("server is runing ", PORT);
})


app.use('/api', route)

app.get('/createCookie',Auth, async(req,res)=>{
res.send("hello from server add ciookie")
})



















