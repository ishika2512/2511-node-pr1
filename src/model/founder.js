const mongoose = require ("mongoose")
const founderSchema=new mongoose.Schema(
    {
        founder_name:{
            type: String,
            trim: true,
        },
        founder_contact:{
            type: Number,
        },
        founder_bio:{
            type: String,
            trim: true,
        },
        founder_email:{
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
const founder = mongoose.model("founder",founderSchema);
module.exports = founder;