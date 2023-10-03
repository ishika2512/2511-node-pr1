const mongoose = require ("mongoose")
const playerSchema=new mongoose.Schema(
    {
        player_name:{
            type: String,
            trim: true,
        },
        father_name:{
            type: String,
            trim: true,
        },
        date_of_birth:{
            type: Date,
            default: Date.now(),
        },
        player_contact:{
            type: Number,
        },
        player_address:{
            type: String,
            trim: true,
        },
        player_team:{
            type: String,
            trim: true,
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
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
const player = mongoose.model("player",playerSchema);
module.exports = player;