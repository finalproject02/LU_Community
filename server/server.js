import express from 'express';
import http from "http";
import morgan from 'morgan'
import { Server } from "socket.io";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import methodOverride from 'method-override';
import admissions from "./routes/admissions.js";
import test from './routes/test.js'
import fileService from "./services/fileService.js";
import DatabaseConnection from "./config/db.js";
import cors from 'cors'

const app = express();
const server = http.createServer(app);
dotenv.config({ path: './config/config.env' })
await DatabaseConnection()

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(methodOverride('_method'));
app.use(morgan('common'))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Server running...')
})

app.use('/api', admissions);
app.use('/api/files', fileService)
app.use('/test', test)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
