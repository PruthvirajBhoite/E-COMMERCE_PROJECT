import mongoose from "mongoose";

const url = "mongodb://pruthvibhoite07_db_user:bhoite123@ac-iln405h-shard-00-00.ub6tntu.mongodb.net:27017,ac-iln405h-shard-00-01.ub6tntu.mongodb.net:27017,ac-iln405h-shard-00-02.ub6tntu.mongodb.net:27017/?ssl=true&replicaSet=atlas-10eg6o-shard-0&authSource=admin&appName=Cluster0";

// mongodb+srv://pruthvibhoite07_db_user:rhDYCmzsoS7sR4Ws@cluster0.ub6tntu.mongodb.net/?appName=Cluster0
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url); // ✅ no options
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
    }
};

export default connectDB;
