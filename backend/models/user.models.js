import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"],
    },
    profilePhoto:{
        type:String,
        default:""
    }

},{timestamps:true})

export const User=mongoose.model('User',userSchema)