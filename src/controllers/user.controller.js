const { User } = require("../model")
const joi = require("joi");
const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const jwtSecrectKey = "SwdDtrfbmvhky76bfhgrDSsqwegdfv";
const ejs = require("ejs");
const { userService, emailService } = require("../services");
const { auth } = require("../middlewares/auth");

// user register
const register = async (req, res) => {
    const { email, password, role } = req.body;
    const hashPassword = await bcrypt.hash(password, 8);

    let option = {
        email,
        role,
        exp: moment().add(1, "days").unix(),
    };

    const token = await jwt.sign(option, jwtSecrectKey);

    const filter = {
        email,
        role,
        password: hashPassword,
        token,
    };

    const data = await userService.createUser(filter);

    res.status(200).json({ data });
};

//user login
const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        const findUser = await userService.findUserByEmail({ email });

        if (!findUser) throw Error("User not found");

        const successPassword = await bcrypt.compare(password, findUser.password);
        if (!successPassword) throw Error("Incorrect password");

        let option = {
            email,
            role: findUser.role,
            exp: moment().add(1, "days").unix(),
        };

        let token;
        if (findUser && successPassword) {
            token = await jwt.sign(option, jwtSecrectKey)
        }

        let data;
        if (token) {
            data = await userService.findUserAndUpdate(findUser._id, token);
        }
        res.status(200).json({ data });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// get all user
const getAllUser = async (req, res) => {
    try {
        console.log(req, headers.token, '');
        await auth(req, headers.token, ['admin']);

        const data = await userService.getAllUser({ role: "admin" });
        res.status(200).json({ data });

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// create state
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;

        const User = await userService.createUser(reqBody);

        res.status(200).json({
            success: true,
            message: "User Create Successfully!",
            data: { User }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//get user list
const userList = async (req, res) => {
    try {
        const getList = await userService.userList();
        res.status(200).json({
            success: true,
            message: "get User List successfully!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update user details
const updateRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEx = await userService.getUserById(userId);
        if (!userEx) {
            throw new Error("User Not Found");
        };

        await userService.updateRecode(userId, req.body);
        res.status(200).json({
            success: true,
            message: "User Details Update Successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete user details
const deleteRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEx = await userService.getUserById(userId);
        if (!userEx) {
            throw new Error("User details not found")
        }
        await userService.deleteRecode(userId);
        res.status(200).json({
            success: true,
            message: "User details delete successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// semd maile
const sendMail = async (req, res) => {
    try {
        const reqBody = req.body;

        const sendMail = await emailService.sendMail(
            reqBody.email,
            reqBody.subject,
            reqBody.text
        );
        if (!sendMail) {
            throw new Error("Something went wrong, please try again or later")
        }
        res.status(200).json({
            success: true,
            message: "Email send successfully "
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
module.exports = {
    register,
    login,
    getAllUser,
    createUser,
    userList,
    updateRecode,
    deleteRecode,
    sendMail
};