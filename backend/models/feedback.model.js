import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    rating: {
        type: String,
        required: true,
        maxlength: 5
    },
    comments: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;