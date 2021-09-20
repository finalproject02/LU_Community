import express from "express";
import path from "path";
import mongoose from "mongoose";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import Grid from 'gridfs-stream';
const router = express.Router();
const mongoURI = 'mongodb://localhost:27017/lucommunity'
const conn = mongoose.createConnection(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

let gfs;
conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('storage')
})

const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = file.originalname;
            const fileInfo = {
                filename: filename,
                bucketName: 'storage'
            }
            resolve(fileInfo)
        })
    }
})

const upload = multer({ storage });
router.post('/storage', upload.single('file'), (req, res) => {
    res.json('Upload success')
})

router.get('/storage/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            })
        } else {
            const readStream = gfs.createReadStream(file.filename);
            readStream.pipe(res)
        }
    })
})


export default router;