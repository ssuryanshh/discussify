const httpStatus = require("http-status");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  RegisterUserService,
  GetUserByEmailId,
  DeleteUserByIdService,
  GetUserByIdService
} = require("./../services/User.service");

async function RegisterUserController(req, res) {
  try {
    const {
      name,
      username,
      email,
      password,
      category,
      isMentor,
      areaOfExpertise,
    } = req.body;

    if (!name) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ success: false, message: "Name is required" });
    }
    if (!username) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ success: false, message: "Username is required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ success: false, message: "A valid email is required" });
    }
    if (!password || password.length < 6) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: "Password is required and must be at least 6 characters long",
      });
    }
    if (!category) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ success: false, message: "Category is required" });
    }
    if (isMentor === undefined) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ success: false, message: "isMentor is required" });
    }
    if (isMentor && !areaOfExpertise) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: "Area of Expertise is required for mentors",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    const user = await RegisterUserService(
      name,
      username,
      email,
      encryptedPassword,
      category,
      isMentor,
      areaOfExpertise
    );

    if (user.success) {
      return res
        .status(httpStatus.CREATED)
        .json({ success: true, data: user.data });
    } else {
      throw new Error("Failed to register new user");
    }
  } catch (err) {
    console.error(err);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: err.message });
  }
}

async function LoginUserController(req, res) {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ success: false, message: "Email is required" });
    }
    if (!password) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ success: false, message: "Password is required" });
    }
    const user = await GetUserByEmailId(email);
    if (!user.success) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ success: false, message: "User not found" });
    }
    const { password: encryptedPassword, _id: id } = user.data;
    const compareResult = await bcrypt.compare(password, encryptedPassword);
    if (!compareResult) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ success: false, message: "Invalid password" });
    }
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

    const PAYLOAD = { id, email };
    const token = jwt.sign(PAYLOAD, JWT_SECRET_KEY, { expiresIn: "2hr" });
    res.status(httpStatus.OK).json({
      success: true,
      userId: user.data._id,
      username: user.data.username,
      category: user.data.category,
      token: token,
    });
  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message,
    });
  }
}

async function DeleteUserByIdController(req, res) {
  try {
    const {id} = req.query;
    const user = await DeleteUserByIdService(id);
    if (user.success) {
      res
        .status(httpStatus.OK)
        .json({ success: true, message: "User deleted successfully" });
    } else {
      res
        .status(httpStatus.NOT_FOUND)
        .json({ success: false, message: user.message });
    }
  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message,
    });
  }
}

async function GetUserByIdController(req, res) {
    try {
      const  id = req.user.id;
      const user = await GetUserByIdService(id);
      if (user.success) {
        return res.status(httpStatus.OK).json({ success: true, data: user.data });
      } else {
        return res.status(httpStatus.NOT_FOUND).json({ success: false, message: user.message });
      }
    } catch (err) {
      console.error(err);
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
  }
  
module.exports = {
  RegisterUserController,
  LoginUserController,
  DeleteUserByIdController,
  GetUserByIdController
};
