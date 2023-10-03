const mongoose = require ("mongoose")
const gallarySchema=new mongoose.Schema(
    {
        image_name:{
            type: String,
            trim: true,
        },
        image_desc:{
            type: String,
            trim: true,
        },
        image:{
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
const gallary = mongoose.model("gallary",gallarySchema);
module.exports = gallary;