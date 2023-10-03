const mongoose = require ("mongoose")
const userSchema=new mongoose.Schema(
    {
        first_name:{
            type: String,
            trim: true,
        },
        last_name:{
            type: String,
            trim: true,
        },
        email:{
            type: String,
            trim: true,
        },
        password:{
            type: String,
        },
        address:{
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
const user = mongoose.model("user",userSchema);
module.exports = user;