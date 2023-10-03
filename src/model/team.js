const mongoose = require ("mongoose")
const teamSchema=new mongoose.Schema(
    {
        team_name:{
            type: String,
            trim: true,
        },
        team_number:{
            type: Number,
        },
        team_leader:{
            type: String,
            trim: true,
        },
        team_member:{
            type: Number,
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
        },
        player:{
            type:mongoose.Types.ObjectId,
            ref:"player"
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
const team = mongoose.model("team",teamSchema);
module.exports = team;