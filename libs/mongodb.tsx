import mongoose from "mongoose";

// interface ProcessEnv {
    
//     MONGODB_URI: string;

// }


const connectMongoDB = async () => {

    const DataBaseUrl = process.env.MONGODB_URI;

    if (!DataBaseUrl) {
        throw new Error("Database URL not Defined")
    }

    try {
        await mongoose.connect(DataBaseUrl);
        console.log("Connected to mongoDB")
    } catch (error) {
        console.log(error)

    }
};

export default connectMongoDB