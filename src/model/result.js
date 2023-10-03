const mongoose = require ("mongoose")
const resultSchema=new mongoose.Schema(
    {
        match_date:{
            type: Date,
            default: Date.now(),
        },
        winner_team:{
            type: String,
            trim: true,
        },
        loser_team:{
            type: String,
            trim: true,
        },
        winning_score:{
            type: Number,
            trim: true,
        },
        losing_score:{
            type: Number,
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
const result = mongoose.model("result",resultSchema);
module.exports = result;