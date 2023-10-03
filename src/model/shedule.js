const mongoose = require ("mongoose")
const sheduleSchema=new mongoose.Schema(
    {
        team_name:{
            type: String,
            trim: true,
        },
        schedule_date:{
            type: Date,
            default: Date.now(),
        },
        time:{
            type: String,
            trim: true,
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
        },
        team:{
            type: mongoose.Types.ObjectId,
            ref:"team"
        },
        date:{
            type:Date,
            default:Date.now()
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
const shedule = mongoose.model("shedule",sheduleSchema);
module.exports = shedule;