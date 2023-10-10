const mongooes = require ("mongoose");
const { productList } = require("../controllers/product.controller");
const productSchema=new mongooes.Schema(
    {
        product_name:{
            type: String,
            trim: true,
        },
        product_price:{
            type: Number,
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

const product = mongooes.model("product", productSchema);
module.exports = product;