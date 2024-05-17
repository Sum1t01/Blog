import express from 'express';
import { signUp, signIn } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signUp)
    .post('/signin', signIn);

export default router;