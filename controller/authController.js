import e from "express";
import user from "../model/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


export const register = async (req, res) => {
    const {username, email, password} = req.body;
    try {
        const existingUser = await user.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: "User already exists"});
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await user.create({username, email, password: hashedPassword});
        res.json({
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            password: newUser.password
        })

    }
    catch (error) {
        res.status(500).json({message: "Server error"});
    }
}


export const login = async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const existingUser = await user.findOne({username});

        if (!existingUser) {
            return res.status(400).json({message: "User Not Found"});
        }

        const isMatch = await bcrypt.compare(password, existingUser.password)

        if(!isMatch) {
            return res.status(400).json({message: "Password Incorrect"});
        }

        const token = jwt.sign({
            id: existingUser._id,
            username: existingUser.username,
            email: existingUser.email
        },
        "kishorshresthaofficial",
        {expiresIn: "1h"}
    )
        res.json({message: "Login Successful", token, user: {id: existingUser._id, username: existingUser.username, email: existingUser.email}});

    }
    catch (error) {        
        res.status(500).json({message: "Server error"});
    }
}