const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
    {
<<<<<<< HEAD
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
        },
        movie:{
            type:mongoose.Types.ObjectId,
            ref:"movie"
=======
        user_id:{
            type: Number,
        },
        movie_id:{
            type: Number,
>>>>>>> 0d248bfbcddc1d2e0818c61b43a584c459308bd0
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