const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        rating: {
            type: Number,
            default: 2,
        },
        review: {
            type: String,
            trim: true,
        },
        review_date: {
            type: Date,
            default: Date.now(),
        },
        Restaurant: {
            type: mongoose.Types.ObjectId,
            ref: "Restaurant"
        },
        User: {
            type: mongoose.Types.ObjectId,
            ref: "User"
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

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;