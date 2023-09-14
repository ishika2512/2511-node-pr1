const mongoose = require("mongoose");
const theaterSchema = new mongoose.Schema(
    {
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
        no_of_seat:{
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