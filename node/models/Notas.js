import mongoose from "mongoose";

const chatSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
},{
    timestamp: true
})

export default mongoose.model("chat", chatSchema)