const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema(
    {
        booking_id:{
            type: Number,
            default: 0,
        },
        no_of_ticket:{
            type: Number,
            default: 0,
        },
        total_amount:{
            type: Number,
            default: 0,
        },
        show_date:{
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