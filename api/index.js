import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

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

app.get('/', (req, res) => {
    console.log("Ding!");
})

