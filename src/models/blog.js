const mongoose=require("mongoose");
const blogSchema=new mongoose.Schema(
    {
        blog_name:{
            type:String,
            trim:true,
        },
        blog_desc:{
            type:String,
            trim:true,
        },
        // blog_image:{
        //     type: mongoose.Types.ObjectId,
        //     ref: "images",
        // },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
)