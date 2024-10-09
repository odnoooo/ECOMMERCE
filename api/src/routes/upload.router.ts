import  express  from "express";
import Multer from "multer";
import {uploadFile} from "../controllers/upload.controller";

const uploadRouter=express.Router();
const storage=Multer.memoryStorage();
const upload=Multer({storage});

uploadRouter.post("/upload",upload.single("ProductImage"),uploadFile);

export default uploadRouter;

