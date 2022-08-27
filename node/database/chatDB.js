import dotenv from "dotenv";
dotenv.config();
import pkg from "mongoose";
const { connect } = pkg

const MONGO_URI = process.env.MONGO_URI 

export const connectDB = async () => {
    try {
        await connect(MONGO_URI)
        console.log("conectado a chatDB")
    } catch (error) {
        console.log(error)
    }
}