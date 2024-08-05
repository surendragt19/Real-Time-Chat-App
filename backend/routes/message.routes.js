import express from 'express';
const router=express.Router()
import {sendMsgController,getMsgController} from '../controller/message.controller.js'
import isAuthenticate from '../midlewear/isAuthanticate.middalewear.js';

router.post('/send/:id',isAuthenticate,sendMsgController)

router.get('/:id',isAuthenticate,getMsgController)
export default router;