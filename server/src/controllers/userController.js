import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
    try {
        console.log(req.body);


        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(hashedPassword);



        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });



        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Database Server Error",
        });
    }
};
