import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
categories: {
    type: [Schema.Types.ObjectId],
    ref: "Category",
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true, // whitespace-ыг автоматаар хасна
  },
  images: [
    {
      type: String,
      required: false, // Зураг заавал оруулах шаардлагагүй
    }
  ],
  description: {
    type: String,
    required: true,
    trim: true, // whitespace-ыг автоматаар хасна
  },
  productCode:{
    type:String;
    required:false,
  },
  price: {
    type: Number,
    required: true, // Үнэ нь заавал шаардлагатай
    min: [0, 'Price cannot be negative'], // Сөрөг үнэ оруулахгүй
  },
  code:{
    type:String,
    required:true
  },
  discountPercent: {
    type: Number,
    default: 0,
    min: [0, 'Discount cannot be negative'], // Хөнгөлөлтийн хувь 0-аас бага байж болохгүй
    max: [100, 'Discount cannot exceed 100%'], // 100%-аас хэтрэхгүй
  },
  qty: {
    free: { type: Number, required: false, default: 0 }, // Чөлөөт хэмжээ
    s: { type: Number, required: false, default: 0 },
    m: { type: Number, required: false, default: 0 },
    l: { type: Number, required: false, default: 0 },
    xl: { type: Number, required: false, default: 0 },
    "2xl": { type: Number, required: false, default: 0 },
    "3xl": { type: Number, required: false, default: 0 },
  },
  averageRating: {
    type: Number,
    default: 0,
    min: [0, 'Rating cannot be negative'], // Хэвийн биш үнэлгээний утгыг зогсооно
    max: [5, 'Rating cannot exceed 5'], // Үнэлгээ хамгийн ихдээ 5 байх ёстой
  },
  numberOfReviews: {
    type: Number,
    default: 0,
    min: [0, 'Number of reviews cannot be negative'], // Сөрөг тоо оруулахгүй
  },
  createdAt: {
    type: Date,
    default: Date.now, // Бүтээгдэхүүн үүсэхэд автоматаар оноогдох
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Автоматаар шинэчлэгдэнэ
  },
});

export const productModel = model("Product", productSchema);
