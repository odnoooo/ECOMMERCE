import {Request, Response} from "express";
import{v2 as cloudinary} from "cloudinary";
import { Buffer } from "buffer";
import dotenv from "dotenv"


dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret:process.env.API_SECRET,
});

async function handleUpload(file:string){
    const res=await cloudinary.uploader.upload(file,{
    resource_type:"auto",
    });
    return res;
}

export const uploadFile=async(req:Request,res:Response)=>{
    console.log(req);
    if(!req.file)return res.status(400).send("No file upload.");
   
    

    try{
        const b64=Buffer.from(req.file.buffer).toString("base64");
        let dataURI="data:"+req.file.mimetype+";base64,"+b64;
        const cldRes=await handleUpload(dataURI);
        res.json(cldRes);
    }catch(error){
        console.log(error);
        res.status(500).send("File upload failed.")
    }
};