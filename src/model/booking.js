const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema(
    {
<<<<<<< HEAD
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
        },
        show:{
            type:mongoose.Types.ObjectId,
            ref:"show"
=======
        booking_id:{
            type: Number,
            default: 0,
>>>>>>> 0d248bfbcddc1d2e0818c61b43a584c459308bd0
        },
        no_of_ticket:{
            type: Number,
            default: 0,
        },
        total_amount:{
            type: Number,
            default: 0,
        },
        booking_date:{
            type: Date,
            default: Date.now(),
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
const booking = mongoose.model("booking", bookingSchema);
module.exports = booking;