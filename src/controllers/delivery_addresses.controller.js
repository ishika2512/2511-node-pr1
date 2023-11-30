const { deliveryaddressesService } = require("../services");

// create

const createDeliveryAddresses = async (req, res) => {
    try {
        const reqBody = req.body;

        const deliveryaddresses = await deliveryaddressesService.createDeliveryAddresses(reqBody);
        res.status(200).json({
            success: true,
            message: "Delivery addresses create successfully!",
            data: { deliveryaddresses },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get delivery addresses list

const deliveryAddressesList = async (req, res) => {
    try {
        const getList = await deliveryaddressesService.deliveryAddressesList();
        res.status(200).json({
            success: true,
            message: "Get deliveryaddresses list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update delivery addresses

const updateRecode = async (req, res) => {
    try {
        const deliveryaddressesId = req.params.deliveryaddressesId;

        const deliveryaddressesEx = await deliveryaddressesService.getdeliveryaddressesById(deliveryaddressesId);
        if (!deliveryaddressesEx) {
            throw new Error("Delivery addresses not found");
        }

        await deliveryaddressesService.updateRecode(deliveryaddressesId, req.body);
        res.status(200).json({
            success: true,
            message: "Delivery addresses detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete delivery addresses

const deleteRecode = async (req, res) => {
    try {
        const deliveryaddressesId = req.params.deliveryaddressesId;

        const deliveryaddressesEx = await deliveryaddressesService.getdeliveryaddressesById(deliveryaddressesId);
        if (!deliveryaddressesEx) {
            throw new Error("Delivery addresses not found");
        };

        await deliveryaddressesService.deleteRecode(deliveryaddressesId, req.body);
        res.status(200).json({
            success: true,
            message: "Delivery addresses detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createDeliveryAddresses,
    deliveryAddressesList,
    updateRecode,
    deleteRecode
};