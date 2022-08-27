import mongoose from "mongoose";

// const chatSchema = new mongoose.Schema ({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String
//     }
// },{
//     timestamp: true
// })


const chatSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true
    },
    message: {
        type: String
    }
},{
    timestamp: true
})

export default mongoose.model("chat", chatSchema)