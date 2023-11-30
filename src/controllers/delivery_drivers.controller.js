const { deliverydriversService } = require("../services");

// create delivery driver

const createDeliveryDrivers = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const deliverydrivers = await deliverydriversService.createDeliveryDrivers(reqBody);

        res.status(200).json({
            success: true,
            message: "deliverydrivers detiles create successfully!",
            data: { deliverydrivers },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get delivery drivers list

const deliveryDriversList = async (req, res) => {
    try {
        const getList = await deliverydriversService.deliveryDriversList();

        res.status(200).json({
            success: true,
            message: "Get delivery drivers list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete delivery drivers list

const deleteRecord = async (req, res) => {
    try {
        const deliverydriversId = req.params.deliverydriversId;

        const deliverydriversEx = await deliverydriversService.getdeliverydriversById(deliverydriversId);
        if (!deliverydriversEx) {
            throw new Error("Delivery driver detiles not found!");
        }

        await deliverydriversService.deleteRecode(deliverydriversId);

        res.status(200).json({
            success: true,
            message: "Delivery driver detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// update delivery drivers detiles
const updateRecode = async (req, res) => {
    try {
        const deliverydriversId = req.params.deliverydriversId;

        const deliverydriversEx = await deliverydriversService.getdeliverydriversById(deliverydriversId);
        if (!deliverydriversEx) {
            throw new Error("Delivery drivers not found!");
        }

        await deliverydriversService.updateRecode(deliverydriversId, req.body);

        res.status(200).json({
            success: true,
            message: "Delivery drivers details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createDeliveryDrivers,
    deliveryDriversList,
    deleteRecord,
    updateRecode
};

