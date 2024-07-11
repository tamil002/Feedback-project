import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI,);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.log("Error Connecting MongoDB", error.message);
    }
}

export default connectDb;
