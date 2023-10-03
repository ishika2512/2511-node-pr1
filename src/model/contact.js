const mongoose = require ("mongoose")
const contactSchema=new mongoose.Schema(
    {
        first_name:{
            type: String,
            trim: true,
        },
        last_name:{
            type: String,
            trim: true,
        },
        email:{
            type: String,
            trim: true,
        },
        contact_no:{
            type: Number,
        },
        address:{
            type: String,
            trim: true,
        },
        is_active:{
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);
const contact = mongoose.model("contact",contactSchema);
module.exports = contact;