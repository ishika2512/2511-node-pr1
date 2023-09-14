const mongoose = require("mongoose");
const showSchema = new mongoose.Schema(
    {
        movie:{
            type:mongoose.Types.ObjectId,
            ref:"movie"
        },
        theater:{
            type:mongoose.Types.ObjectId,
            ref:"theater"
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