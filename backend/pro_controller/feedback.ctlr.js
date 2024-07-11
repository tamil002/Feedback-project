import Feedback from "../models/feedback.model.js";

export const sendFeedback = async (req, res) => {
    try {
        const { rating, comments } = req.body;
        const senderId = req.user._id

        if (rating < 1) {
            return res.status(400).json({ error: "Rating Must be Atleast 1" })
        }

        const newFeedback = new Feedback({
            senderId,
            rating,
            comments
        })

        if (newFeedback) {
            await newFeedback.save()

            res.status(201).json({
                _id: newFeedback._id,
                senderId: newFeedback.senderId,
                rating: newFeedback.rating,
                comments: newFeedback.comments
            })

        }



    } catch (error) {
        console.log("Error in sendFeedback controller:", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}