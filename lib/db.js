// mongodb+srv://rkpranav11:HGV5ejmRQkwQzQ4I@cluster0.dftb14b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config(); //This will bring .env file from project and config in this file.

const connectDB = async () => {
    try {
        //Process refers to terminal, install dotenv package to detect process.env
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected...');
    }
    catch (err) {
        console.error(err.message)
        process.exit(1);
    }
}

export default connectDB;