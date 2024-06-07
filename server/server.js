import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import methodOverride from 'method-override';
import admissions from "./routes/admissions.js";
import posts from "./routes/posts.js";
import fileService from "./services/fileService.js";
import auth from './routes/auth.js';
import users from './routes/users.js'
import clubs from "./routes/clubs.js";
import groups from "./routes/groups.js";
import messages from "./routes/messages.js";
import students from './routes/student.js'
import DatabaseConnection from "./config/db.js";
import cors from 'cors'
import department from "./routes/department.js";

const app = express();
dotenv.config({ path: './config/config.env' });
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
app.use('/api/files', fileService);
app.use('/api/auth', auth);
app.use('/api', users);
app.use('/api/student', students);
app.use('/api/posts', posts);
app.use('/api/club', clubs);
app.use('/api/group', groups);
app.use('/api/messages', messages);
app.use('/api/department', department)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))