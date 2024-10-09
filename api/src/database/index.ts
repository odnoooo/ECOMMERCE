import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export const connectToDatabase = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGOOSE_CONNECTION as string);
      console.log(`Connected to database: ${conn.connection.host}`);
    } catch (err) {
      console.error(err,"error");
    }
  };

// export const connectToDatabase=async()=>{
//    try{
//     const conn =await mongoose.connect(process.env.MONGOOSE_CONNECTION as string)
//     console.log(`Connected to database: ${conn.connection.host}`)
//    }catch(err){
// console.error(err)
//    }
// }