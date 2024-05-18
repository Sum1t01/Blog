import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },
    profilePicture:{
        type:String,
        default:'https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg'
    }
},
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;