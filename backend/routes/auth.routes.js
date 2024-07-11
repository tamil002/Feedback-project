import express from 'express';
import { login, signout, signup } from '../pro_controller/auth.ctlr.js';


const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/signout", signout);

export default router;