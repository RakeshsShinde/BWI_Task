import User from "../models/user.model.js";
import userSchema from '../validation/userSchema.js';

export const signup = async (req, res, next) => {
    try {
        const userData = userSchema.parse(req.body);
        const profilePicPath = req.file ? req.file.filename : null;
        const newUser = new User({
            ...userData,
            profilePic: profilePicPath
        })

        await newUser.save();
        const savedUser = await User.findById(newUser._id).select('-password');
        return res.status(200).json({
            message: "user register successfully !",
            savedUser,
        })
    } catch (err) {
        next(err);
    }
}