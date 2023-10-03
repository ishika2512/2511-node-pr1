const mongoose = require ("mongoose")
const newsSchema=new mongoose.Schema(
    {
        news_title:{
            type: Date,
            default: Date.now(),
        },
        publication_date:{
            type: String,
            trim: true,
        },
        content:{
            type: String,
            trim: true,
        },
        comment:{
            type: Number,
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
const news = mongoose.model("news",newsSchema);
module.exports = news;