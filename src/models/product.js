const mongooes = require ("mongooes")

const productSchema=new mongooes.Schema(
    {
        product_name:{
            type: String,
            trim: true,
        },
        product_price:{
            type: Number,
            trim: true,
        },
        product_desc:{
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
const product = mongooes.model("products",productSchema);
model.exports = product;