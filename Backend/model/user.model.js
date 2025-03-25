//schema of data that will store database
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
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
}, { timestamps: true }); // ✅ Adds createdAt & updatedAt

const User = mongoose.model("User", userSchema);

export default User;
