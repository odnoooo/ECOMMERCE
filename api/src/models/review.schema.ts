import mongoose from "mongoose";
const {Schema, model}=mongoose;

const reviewSchema=new Schema({
    product:{
        type: Schema.Types.ObjectId,
        ref:"Product",
        required: true,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    star:{
        type:Number,
        required: true,
    },
    comment:{
        type:String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        required: true,
        default: Date.now,
      },
},
{timestamps: true}
);

export const reviewModel= model("Review", reviewSchema);