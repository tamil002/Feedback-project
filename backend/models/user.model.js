import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        maxlength: 10
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }

}, { timestamps: true });

const User = mongoose.model("User", userSchema)

export default User