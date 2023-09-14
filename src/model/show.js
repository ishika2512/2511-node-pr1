const mongoose = require("mongoose");
const showSchema = new mongoose.Schema(
    {
<<<<<<< HEAD
        movie:{
            type:mongoose.Types.ObjectId,
            ref:"movie"
        },
        theater:{
            type:mongoose.Types.ObjectId,
            ref:"theater"
=======
        movie_id:{
            type: String,
        },
        theater_id:{
            type: String,
>>>>>>> 0d248bfbcddc1d2e0818c61b43a584c459308bd0
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