const User = require("../models/Users.model");

async function RegisterUserService(
  name,
  username,
  email,
  encryptedPassword,
  category,
  isMentor,
  areaOfExpertise
) {
  try {
    const user = await User.create({
      name,
      username,
      password: encryptedPassword,
      email,
      category,
      isMentor,
      areaOfExpertise,
      credits: 100,
    });
    if (user) {
      return {
        success: true,
        data: user,
      };
    } else {
      throw new Error("Error in RegisterUserService");
    }
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: err.message,
    };
  }
}

async function GetUserByEmailId(email) {
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return {
        success: true,
        data: user,
      };
    } else {
      throw new Error("Error in GetUserByEmailId");
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: err.message,
    };
  }
}

async function DeleteUserByIdService(id) {
  try {
    const user = await User.findByIdAndDelete(id);
    if (user) {
      return {
        success: true,
      };
    } else {
      throw new Error("Error in DeleteUserByIdService");
    }
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: err.message,
    };
  }
}

async function GetUserByIdService(id) {
    try {
      const user = await User.findById(id);
      if (user) {
        return {
          success: true,
          data: user,
        };
      } else {
        throw new Error("User not found");
      }
    } catch (err) {
      console.error(err);
      return {
        success: false,
        message: err.message,
      };
    }
  }
  
module.exports = { RegisterUserService, GetUserByEmailId,DeleteUserByIdService,GetUserByIdService };
