const mongooes = require ("mongooes")
const userSchema=new mongooes.Schema(
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
const user = mongooes.model("users",userSchema);
model.exports = user;