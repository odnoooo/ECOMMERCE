import mongoose from "mongoose";
const {Schema, model}=mongoose;

const orderSchema= new Schema({
    user:{
        type: Schema.Types.ObjectId,
       ref: "User",
       required: true,
    },
    products:[
        {
        product:{
            type: Schema.Types.ObjectId,
            ref:"Product",
            required: true,
        },
        price:{
            type:Number,
            required:true,
        },
        qty:{
            type: Number,
            required:true,
        }
    }
],
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

});

export const orderModel=model("Order", orderSchema)

