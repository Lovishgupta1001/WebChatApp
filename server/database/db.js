import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-4qo jqrk-shard-00-00.jcn23s3.mongodb.net:27017,ac-4qojqrk-shard-00-01.jcn23s3.mongodb.net:27017,ac-4qojqrk-shard-00-02.jcn23s3.mongodb.net:27017/?ssl=true&replicaSet=atlas-vq3d9v-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log('DataBase Connected Successfully');
    }
    catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;