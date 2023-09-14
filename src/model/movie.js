const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema(
    {
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
            default: Date.now(),
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