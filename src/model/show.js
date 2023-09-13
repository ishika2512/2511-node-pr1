const mongoose = require("mongoose");
const showSchema = new mongoose.Schema(
    {
        movie_id:{
            type: String,
        },
        theater_id:{
            type: String,
        },
        show_date:{
            type: Date,
            default: Date.now(),
        },
        ticket_price:{
            type: Number,
            default: 0,
        },
        booking_status:{
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
const show = mongoose.model("show", showSchema);
module.exports = show;