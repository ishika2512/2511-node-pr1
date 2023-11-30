const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            trim: true,
        },
        Restaurant:{
            type:mongoose.Types.ObjectId,
            ref:"Restaurant"
        },
        User:{
            type:mongoose.Types.ObjectId,
            ref:"User"
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;