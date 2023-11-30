const { menuitemService } = require("../services");

// create
const createMenuitem = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const menuitem = await menuitemService.createMenuitem(reqBody);
        res.status(200).json({
            success: true,
            message: "Menuitem create successfully",
            data: { menuitem },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get menuitem list
const menuitemList = async (req, res) => {
    try {
        const getList = await menuitemService.menuitemList();
        res.status(200).json({
            success: true,
            message: "Get menuitem list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update menu-item list
const updateRecode = async (req, res) => {
    try {
        const menuitemId = req.params.menuitemId;

        const menuitemEx = await menuitemService.getmenuitemById(menuitemId);
        if (!menuitemEx) {
            throw new Error("Menuitem not found");
        }

        await menuitemService.updateRecode(menuitemId, req.body);
        res.status(200).json({
            success: true,
            message: "Menuitem detiles update successfully!"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete menu-item list
const deleteRecode = async (req, res) => {
    try {
        const menuitemId = req.params.menuitemId;

        const menuitemEx = await menuitemService.getmenuitemById(menuitemId);
        if (!menuitemEx) {
            throw new Error("Menuitem not found");
        };

        await menuitemService.deleteRecode(menuitemId, req.body);
        res.status(200).json({
            success: true,
            message: "Menuitem detiles delete successfully !"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createMenuitem,
    menuitemList,
    updateRecode,
    deleteRecode
}