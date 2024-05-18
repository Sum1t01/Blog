import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import errorHandler from "../utils/error.js";
import jwt from 'jsonwebtoken';

const signUp = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !password || !email || username === '' || password === '' || email === '') {
        return next(errorHandler(400, 'All fields are required!'));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username: username,
        email: email,
        password: hashedPassword,
    })

    try {
        await newUser.save();
        res.json({ message: "successful" });
    }
    catch (error) {
        next(error);
    }


};

const signIn = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
        return next(errorHandler(400, 'All fields are required!'));
    }

    try {
        const validUser = await User.findOne({ email: email });

        if (!validUser) {
            return next(errorHandler(404, 'User not found!'));
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);

        if (!validPassword) {
            return next(errorHandler(400, 'Invalid credentials!'));
        }

        const token = jwt.sign(
            { id: validUser._id },
            process.env.JWT_SECRET,

        )

        const { password: pass, ...rest } = validUser._doc;

        res.status(200).cookie('access_token', token, {
            htteOnly: true
        }).json(rest);

    }
    catch (error) {
        next(error);
    }
};


const google = async (req, res, next) => {
    const { name, email, googlePhotoURL } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            const token = jwt.sign(
                { id: user._id },
                process.env.JWT_SECRET
            );

            const { password, ...rest } = user._doc;

            res.status(200).cookie('access_token', token, {
                htteOnly: true
            }).json(rest);
        }

        else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

            const newUser = new User({
                username: name.toLowerCase().split(' ').join('') + Math.random().toString(10).slice(-4),
                email: email,
                password: hashedPassword,
                profilePicture: googlePhotoURL,
            });

            await newUser.save();

            const token = jwt.sign(
                { id: newUser._id },
                process.env.JWT_SECRET
            );

            const { password, ...rest } = newUser._doc;

            res.status(200).cookie('access_token', token, {
                httpOnly: true
            }).json(rest);
        }
    }
    catch (error) {
        next(error);
    }
};

export { signUp, signIn, google };