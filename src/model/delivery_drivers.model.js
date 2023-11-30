const mongoose = require("mongoose");

const deliverydriversSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        phone_number: {
            type: Number,
            default: 0,
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Deliverydrivers = mongoose.model("Deliverydrivers", deliverydriversSchema);
module.exports = Deliverydrivers;