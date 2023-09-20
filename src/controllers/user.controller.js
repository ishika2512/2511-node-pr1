const { userService } = require("../services");

// create-user
const createuser = async (req, res) => {
  try {
    const reqBody = req.body;

    const userEx = await userService.getuserByName(reqBody.user_name);
    if (userEx) {
      throw new Error(`please add other user this ${userEx.user_name} user already created.`);
    }

    const user = await userService.createuser(reqBody);

    res.status(200).json({
      success: true,
      message: "user create successfully!",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-user
const userList = async (req, res) => {
  try {
    const getuser = await userService.userList();

    res.status(200).json({
      success: true,
      message: "user List!",
      data: {
        getuser
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-user
const deleteRecord = async (req, res) => {
  try {
    const userId = req.params.userId;
    const cateExists = await userService.getuserById(userId);
    if (!cateExists) {
      throw new Error("user not found!");
    }

    await userService.deleteuser(userId);

    res.status(200).json({
      success: true,
      message: "user delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get user by id
const getuserDetails = async (req, res) => {
  try {
    const getDetails = await userService.getuserById(
      req.params.userId
    );
    if (!getDetails) {
      throw new Error("user not found!");
    }

    res.status(200).json({
      success: true,
      message: "user details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update user by id
const updateuser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const cateExists = await userService.getuserById(userId);
    if (!cateExists) {
      throw new Error("user not found!");
    }

    await userService.updateDetails(userId, req.body);

    res.status(200).json({
      success: true,
      message: "user details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createuser,
  userList, 
  deleteRecord,
  getuserDetails,
  updateuser
};