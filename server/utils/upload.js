
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;

const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb://${USERNAME}:${PASSWORD}@ac-4qo jqrk-shard-00-00.jcn23s3.mongodb.net:27017,ac-4qojqrk-shard-00-01.jcn23s3.mongodb.net:27017,ac-4qojqrk-shard-00-02.jcn23s3.mongodb.net:27017/?ssl=true&replicaSet=atlas-vq3d9v-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.mimetype) === -1)
            return `${Date.now()}-file-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
});

export default multer({ storage }); 