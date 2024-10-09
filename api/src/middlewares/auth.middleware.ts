import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET=process.env.JWT_SECRET as string;


export const authMiddleware:(
    req:Request,
    res:Response,
    next:NextFunction
)=>void=(req, res, next)=>{
    try{
        const token =req.headers.authorization?.split(" ")[1];

        if(!token){
            return res.status(401).json({message: "Токен байхгүй байна."});
        }
        const decoded=jwt.verify(token, JWT_SECRET)as{userId: string};

        req.user=decoded.userId;
        next();
    }catch(error){
        console.error("Токен шалгах алдаа:", error);
        return res.status(401).json({message: "Токен буруу байна."});
    }
};

const checkAdminRole=(req: Request, res:Response, next:NextFunction)=>{
    if(req.user&&req.user.role==="admin"){
        next();
    }else{
        return res.status(403).json({message:"Зөвхөн админ нэвтэрнэ."})
    }
};

