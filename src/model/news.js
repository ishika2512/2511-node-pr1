const mongoose = require ("mongoose")
const newsSchema=new mongoose.Schema(
    {
        news_title:{
            type: String,
            trim: true,
        },
        publication_date:{
            type: Date,
            default: Date.now(),
        },
        content:{
            type: String,
            trim: true,
        },
        comment:{
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
const news = mongoose.model("news",newsSchema);
module.exports = news;