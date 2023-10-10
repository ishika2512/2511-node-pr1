const { productService } = require("../services");

// create
const createproduct = async (req,res) => {
    try {
        const reqBody = req.body;

        const product = await productService.createproduct(reqBody);
        res.status(200).json({
            success: true,
            message: "product create successfully !",
            data: { product }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// list
const productList = async (req,res) => {
    try {
        const getList = await productService.productList();
        res.status(200).json({
            success: true,
            message: "get product list sucessfully !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// update
const updateRecode = async (req,res) => {
    try {
        const productId = req.params.productId;

        const productEx = await productService.getproductById(productId);
        if (!productEx) {
            throw new Error("product not found");
        }
        await productService.updateRecode(productId, req.body);
        res.status(200).json({
            success: true,
            message: "product details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req,res) => {
    try {
        const productId = res.params.req.body;
        const productEx = await productService.getproductById(productId);
        if (!productEx) {
            throw new Error("product detiles not found");
        }
        await productService.deleteRecode(productId);
        res.status(200).json({
            success: true,
            message: "product detiles delete successfully!"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};
module.exports = {
    createproduct,
    productList,
    updateRecode,
    deleteRecode
};