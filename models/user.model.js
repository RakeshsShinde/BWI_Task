import mongoose from 'mongoose';
import bcyrpt from 'bcryptjs';

const userSchama = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    profilePic: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        defualt: "user",
    }
})

userSchama.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcyrpt.hash(this.password, 10);
})



const User = new mongoose.model("User", userSchama);
export default User;