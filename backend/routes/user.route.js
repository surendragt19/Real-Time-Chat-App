import express from 'express';
import { registerController, loginController, logoutController, otherUserController } from '../controller/user.controller.js';
import isAuthenticate from '../midlewear/isAuthanticate.middalewear.js'; 

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/logout', logoutController);
router.get('/', isAuthenticate, otherUserController);

export default router;
