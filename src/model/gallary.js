const mongoose = require ("mongoose")
const config = require("../config/config")

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
        sport_img:{
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
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.sport_img) {
                    data.sport_img = `${config.base_url}sport_img/${data.sport_img}`;
                }
            },
        },
    }
);
const gallary = mongoose.model("gallary",gallarySchema);
module.exports = gallary;