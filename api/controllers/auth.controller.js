import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

const signUp = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !password || !email || username === '' || password === '' || email === '') {
        return res.status(404).json({ message: 'All fields are required!' });
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
        res.status(500).json({message:error.message});
    }


};

export { signUp };