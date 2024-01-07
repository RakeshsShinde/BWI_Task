import { Router } from 'express';
import { signup } from '../Controllers/user.controller.js';
import upload from '../utils/fileupload.js';
const userRouter = Router();

userRouter.post('/signup', upload.single("profilepic"), signup);


export default userRouter;