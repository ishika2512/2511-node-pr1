const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
    {
        review_id:{
            type: Number,
        },
        user_id:{
            type: Number,
        },
        movie_id:{
            type: Number,
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