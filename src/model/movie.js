const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema(
    {
        movie_id:{
            type: Number,
        },
        title:{
            type: String,
            trim: true,
        },
        description:{
            type: String,
            trim: true,
        },
        release_date:{
            type: Date,
            default: Date.new(),
        },
        language:{
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
const movie = mongoose.model("movie", movieSchema);
module.exports = movie;