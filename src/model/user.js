const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        user_id:{
            type: Number,
        },
        user_name:{
            type: String,
            trim: true,
        },
        password:{
            type: String,
            trim: true,
        },
        email:{
            type: String,
            trim: true,
        },
        mobile_no:{
            type: Number,
        },
        payment_info:{
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const user = mongoose.model("user", userSchema);
module.exports = user;