import  mongoose  from "mongoose";

const salitaSchema = mongoose.Schema ({
    name: String,
    lastName: String,
    address: String,
    age: Number,
    phone: Number,
    username: String,
    email: String,
    password: String,
})

export default mongoose.model("salita", salitaSchema);