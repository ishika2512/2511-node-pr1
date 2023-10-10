const { userService } = require("../services");

// create
const createUser = async (req,res) => {
    try {
        const reqBody = req.body;

        const user = await userService.createUser(reqBody);
        res.status(200).json({
            success: true,
            message: "user create successfully !",
            data: { user }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// list
const userList = async (req,res) => {
    try {
        const getList = await userService.userList();
        res.status(200).json({
            success: true,
            message: "get user list sucessfully !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// update
const updateRecode = async (req,res) => {
    try {
        const userId = req.params.userId;

        const userEx = await userService.getUserById(userId);
        if (!userEx) {
            throw new Error("user not found");
        }
        await userService.updateRecode(userId, req.body);
        res.status(200).json({
            success: true,
            message: "user details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete
const deleteRecode = async (req,res) => {
    try {
        const userId = res.params.req.body;
        const userEx = await userService.getUserById(userId);
        if (!userEx) {
            throw new Error("user detiles not found");
        }
        await userService.deleteRecode(userId);
        res.status(200).json({
            success: true,
            message: "user detiles delete successfully!"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};
module.exports = {
    createUser,
    userList,
    updateRecode,
    deleteRecode
};