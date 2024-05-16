import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import errorHandler from "../utils/error.js";

const signUp = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !password || !email || username === '' || password === '' || email === '') {
        return next(errorHandler(400, 'All fields are required!'));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username:username,
        email:email,
        password:hashedPassword,
    })

    try
    {
        await newUser.save();
        res.json({message:"successful"});
    }
    catch(error)
    {
        next(error);
    }


};

export { signUp };