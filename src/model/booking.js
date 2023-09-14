const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
        },
        show:{
            type:mongoose.Types.ObjectId,
            ref:"show"
        },
        no_of_ticket:{
            type: Number,
        },
        total_amount:{
            type: Number,
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