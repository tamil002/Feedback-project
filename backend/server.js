import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import feedbackRoutes from './routes/feedback.routes.js';
import connectDb from './db/connectdb.js';

const app = express();
const PORT = process.env.PORT || 8000;


dotenv.config();

app.use(express.json()); // to parse the incomming requests with JSON payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/feedbacks", feedbackRoutes);



// app.get("/", (req, res) => {

//     res.send("Hello World!");
// });



app.listen(PORT, () => {
    connectDb()
    console.log(`server running at port ${PORT}`);
});

