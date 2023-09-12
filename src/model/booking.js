const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema(
    {
        booking_id:{
            type: Number,
        },
        user_id:{
            type: Number,
        },
        show_id:{
            type: Number,
        },
        no_of_ticket:{
            type: Number,
        },
        total_amount:{
            type: Number,
        },
        show_date:{
            type: Date,
            default: Date.new(),
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