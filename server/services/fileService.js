import express from "express";
import mongoose from "mongoose";
import Grid from "gridfs-stream";
import {GridFsStorage} from "multer-gridfs-storage";
import multer from "multer";

const router = express.Router()

const mongoURI = 'mongodb://localhost:27017/lucommunity'
const conn = mongoose.createConnection(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,

});

let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('storage');
});

const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = req.body.name;
            const fileInfo = {
                filename: filename,
                bucketName: 'storage'
            }
            resolve(fileInfo)

        })
    }
});

const upload = multer({storage});
router.post('/storage', upload.single('file') ,(req, res) => {
    res.json('upload success')
});

router.get('/storage/:filename', async (req, res) => {
    const {filename} = req.params
    await gfs.files.findOne({filename}, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            })
        } else {
            const readStream = gfs.createReadStream(file.filename);
            readStream.pipe(res)
        }

    })
});

router.delete('/storage/:filename', async (req, res) => {
    const { filename } = req.params;
    await gfs.files.findOne({ filename }, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            })
        } else {
            gfs.remove({_id: file._id, root: 'storage' }, (err, gridStore) => {
                if (err) return console.log('error')
                res.send('success')
            })
        }

    })

})

export default router;