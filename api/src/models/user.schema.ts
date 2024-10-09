import mongoose from "mongoose";
const {Schema, model}=mongoose;

const userSchema=new Schema({
    username:{
        type:String,
         required: true,
    },
    firstname:{
        type:String,
        required:false,
    },
    lastname:{
        type: String,
        required:false,
    },
    email: {
        type:String,
        required: true,
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Имэйл буруу байна", 
        ]
    }, 
    password: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: false,
        default:"user",
    },
    lastLogin:{
        type:Date,
        default: Date.now
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    phoneNumber:{
        type: String,
        required : false,
        match: [/^\d{8,15}$/, "Утасны дугаар буруу байна"],
    },
    avatar:{
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    description :{
        type: String,
        required : false,
    },
    createdAt :{
        type: Date,
        required: true,
        default : Date.now,
    },
    updatedAt : {
        type : Date,
        required: true,
        default : Date.now,
    }
},
{
    timestamps: true,
}, 
);

export const userModel=model("User", userSchema);

