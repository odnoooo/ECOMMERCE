// import mongoose from "mongoose";
// import dotenv from 'dotenv';

// dotenv.config();

// export const connectToDatabase = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGOOSE_CONNECTION as string);
//     console.log(`Connected to database: ${conn.connection.host}`);
//   } catch (err) {
//     console.error("Database connection error:", err);
//   }
// };
import mongoose from "mongoose";
import dotenv from 'dotenv';

// .env файлыг уншина
dotenv.config();

export const connectToDatabase = async () => {
  try {
    const mongooseConnection = process.env.MONGOOSE_CONNECTION;

    // MONGOOSE_CONNECTION хувьсагч байгаа эсэхийг шалгана
    if (!mongooseConnection) {
      throw new Error("MONGOOSE_CONNECTION хувьсагч олдсонгүй!");
    }

    // Холболтыг тохируулна
    const conn = await mongoose.connect(mongooseConnection);

    console.log(`Connected to database: ${conn.connection.host}`);
  } catch (err) {
    console.error("Database connection error:", err);
  }
};