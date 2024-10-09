import express from "express"
import cors from "cors"
import { connectToDatabase } from "./database";
import {categoryRouter} from "./routes"
import Multer, {memoryStorage} from "multer"
import {v2 as cloudinary} from "cloudinary";
import { productRouter } from "./routes/product.router";
import { orderRouter } from "./routes/order.router";
import { reviewRouter } from "./routes/review.router";
import { authRouter } from "./routes/auth.router";
import dotenv from "dotenv"
import { authMiddleware } from "./middlewares/auth.middleware";
import uploadRouter from "./routes/upload.router";
dotenv.config();

connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());
// app.use(authMiddleware)



// const upload=multer({desc:"uploads"});
// app.post('/upload', upload.single('ProductImage'),(req,res)=>{
//     try{
//         if(!req.file){
//             return res.status(400).send('No file uploaded.')
//         }
//         console.log(req.file);
//         res.status(200).send({message:'File uploaded successfully.'})
//     }catch(error){
//         console.error(error);
//         res.status(500).send("Server error.")
//     }
// })


// app.use("/users", userRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/order",orderRouter);
app.use("/review", reviewRouter);
app.use("/auth", authRouter);
app.use("/",uploadRouter)



// app.post('/upload', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'price', maxCount: 1 }]), (req, res) => {
//     // энд олон талбар ирж болно
//   });

app.get("/",(_req, res)=>{
    res.json({message:"hello world"});
});

app.listen(3001, ()=>{
connectToDatabase();

    console.log("Server is running on http://localHost:3001");
});