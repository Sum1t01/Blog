import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

try {

    await mongoose.connect(process.env.MONGO);
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`);
    })
}
catch (error) {
    console.log(error.message);
}

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!';

    res.status(statusCode).json({
        success:false,
        statusCode:statusCode,
        message:message,
    })
});