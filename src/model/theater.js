const mongoose = require("mongoose");
const theaterSchema = new mongoose.Schema(
    {
        theater_id:{
            type: Number,
        },
        theater_name:{
            type: String,
            trim: true,
        },
        theater_location:{
            type: String,
            trim: true,
        },
        contact_info:{
            type: Number,
        },
        theater_location:{
            type: Number,
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
const theater = mongoose.model("theater", theaterSchema);
module.exports = theater;