import mongoose from "mongoose";
const converstionSchema=new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    message:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message',
    }]
},{timestamps:true})

export const Converstion=mongoose.model('Converstion',converstionSchema)