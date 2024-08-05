import mongoose from "mongoose";

const conectDB=async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database Connect")
    })
    .catch(()=>{
        console.log("Connection Faield")
    })
}

export default conectDB