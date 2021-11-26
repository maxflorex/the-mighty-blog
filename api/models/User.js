const mongoose = require("mongoose");
const { model } = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    ProfilePic: {
        type: String,
        default: '',
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema)