import bcrypt from "bcryptjs"
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async (req, res) => {
    try {
        const { name, email, phone, password, confirmPassword } = req.body;


        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password Don't Match" })
        }

        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ error: "Email already exists!" })
        }



        //HASH PASSWORD HERE

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            name,
            email,
            phone,
            password: hashedPassword

        })

        if (newUser) {
            //grnerate jwt token here
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                phone: newUser.phone
            })
        } else {
            res.status(400).json({ error: "Invalid User Data" })
        }

    } catch (error) {
        console.log("Error in Signup Controller", error.message)
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid Email or Password" })
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,

        });
    } catch (error) {
        console.log("Error in Login Controller", error.message)
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

export const signout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Signed Out Successfully" });
    } catch (error) {
        console.log("Error in Signout Controller", error.message)
        res.status(500).json({ error: "Internal Server Error!" })
    }
}