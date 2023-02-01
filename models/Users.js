const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    usernname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

userSchema.pre('savw', async function (next) {
    if(userSchema.isModified('password')){
        userSchema.password = await bycrypt.hash(user.password, 8);
    }
})

module.exports = mongoose.model('User', userSchema)