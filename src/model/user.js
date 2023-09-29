const mongoose = require("mongoose");
const bcrypt=require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        user_name: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        mobile_no: {
            type: Number,
            default: 0,
        },
        payment_info: {
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

userSchema.pre("save", async function (next) {
    const user = this;

    if (user.isModified("password")) {
        user.password = bcrypt.hash(user.password, 8);
    }
    next();
});

const user = mongoose.model("user", userSchema);
module.exports = user;