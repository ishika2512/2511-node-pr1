const mongooes = require ("mongooes")
const categorySchema= new mongooes.Schema(
    {
        category_name: {
            type: String,
            trim: true,
        },
        category_desc: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);
const category = mongooes.model("categories",categorySchema);
model.exports = category;