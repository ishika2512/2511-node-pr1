const { userService, emailService } = require("../services");
/** create user */
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;

        const userExists = await userService.getUserByEmail(reqBody.email);
        if (userExists) {
            throw new Error("User already created by this email!");
        }
        res.status(200).json({
            success: true,
            message: "User create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createUser,
};