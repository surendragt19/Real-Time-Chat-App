import { Converstion } from '../models/conversation.models.js';
import {Message} from '../models/message.models.js'


export const sendMsgController=async(req,res)=>{
    try {
        const senderId=req.userId
        const reciverId=req.params.id;
        const {message}=req.body
        
        let gotConversation=await Converstion.findOne({participants:{$all:[senderId,reciverId]}})
        if(!gotConversation){
            gotConversation=await Converstion.create({
                participants:[reciverId,senderId]
            })
        }
        
        const newMessage=await Message.create({
            senderId,
            reciverId,
            message
        })
        if(newMessage){
            gotConversation.message.push(newMessage._id)
        };
        await gotConversation.save();

        //socket.io
        return res.status(201).json({status:'msg send succsess'})
    } catch (error) {
        console.log(error)
    }
}

export const getMsgController=async (req,res)=>{
    try {
        const reciverId=req.params.id
        const senderId=req.userId
        const conversation=await Converstion.findOne({
            participants:{$all:[senderId,reciverId]}
        }).populate("message")
        console.log(conversation?.message)
    } catch (error) {
        console.log(error)
    }
}