const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
        },
        movie:{
            type:mongoose.Types.ObjectId,
            ref:"movie"
        },
        review_text:{
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
const review = mongoose.model("review", reviewSchema);
module.exports = review;