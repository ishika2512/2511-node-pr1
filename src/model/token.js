const mongoose = require("mongoose");
const tokenSchema = new mongoose.Schema(
    {
        token: {
            type: String,
        },
        token_location:{
            type: String,
            trim: true,
        },
        expire_time: {
            type: Date,
            default: null,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const token = mongoose.model("token", tokenSchema);
module.exports = token;