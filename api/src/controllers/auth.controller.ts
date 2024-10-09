import jwt from "jsonwebtoken";
import {Request, Response} from  "express";
import {userModel} from "../models/user.schema";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

export const login =async (req: Request, res:Response): Promise<Response>=>{
    try{
        const {email, password}=req.body;

        const user = await userModel.findOne({email})

        if(!user){
            return res.status(401).json({message: "Invalid credentials"});
        }
 console.log(user)
        const isMatch=await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({message: "Invalid credentials"});
        }

        const token =jwt.sign(
            {
                id: user._id,
                email: user.email,
                username: user.username,
            },
            process.env.JWT_SECRET as string,
            {expiresIn: "1h"}
        );
    
        return res.status(201).json({
            message: "Login successfully",
            token,
            user:{
                id: user._id,
                email:user.email,
                username: user.username,
            },
        });
    }catch(error){
        console.error(error);
        return res.status(500).json({ message: "Internal server error"})
    }
};

export const register =async (req:Request, res: Response):Promise<Response>=>{
    
    try{
        const{username,email,password, role}=req.body;
console.log(username);

        const existingUser = await userModel.findOne({email});

        if(existingUser){
            return res.status(400).json({message: "User already exists"})
        }
        
        const salt =await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser= new userModel({
            username,
            email,
            password: hashedPassword,
            role

        });
        await newUser.save();

        return res.status(201).json({
            message:"User registered successfully",
            user:{
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                role:newUser.role
            },
        });
    }catch(error){
        console.error(error);
        return res.status(500).json({message:"Internal server error"})
    }
};



