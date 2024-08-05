import express from 'express'
import dotenv from 'dotenv'
dotenv.config({})
import conectDB from './config/db.js'
import userRoutes from './routes/user.route.js'
import messageRoutes from './routes/message.routes.js'
import cookieParser from 'cookie-parser'

const app=express()
app.use(express.json());
app.use(cookieParser())

app.use('/api/user',userRoutes)
app.use('/api/msg',messageRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is Started at ${process.env.PORT}`)
    conectDB()
})