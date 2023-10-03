const mongoose = require ("mongoose")
const turnamentSchema=new mongoose.Schema(
    {
        turnament_name:{
            type: String,
            trim: true,
        },
        turnament_desc:{
            type: String,
            trim: true,
        },
        turnament_date:{
            type: Date,
            default: Date.now(),
        },
        location:{
            type: String,
            trim: true,
        },
        user:{
            type: mongoose.Types.ObjectId,
            ref:"user"
        },
        team:{
            type: mongoose.Types.ObjectId,
            ref:"team"
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
const turnament = mongoose.model("turnament",turnamentSchema);
module.exports = turnament;