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
userSchema.pre("save", async function (next) {
    const user = this;

    if (user.isModified("password")) {
        user.password = bcrypt.hash(user.password, 8);
    }
    next();
});
const user = mongoose.model("user",userSchema);
module.exports = user;