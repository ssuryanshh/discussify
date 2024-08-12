const express = require("express");
const middleware = require("./../middlewares/auth.middleware")
const {
  RegisterUserController,
  LoginUserController,DeleteUserByIdController,GetUserByIdController
} = require("./../controllers/Auth.controllers");

const AuthRouter = express.Router();
AuthRouter.post("/register", RegisterUserController);
AuthRouter.post("/login", LoginUserController);
AuthRouter.delete("/delete",DeleteUserByIdController);
AuthRouter.get("/user",middleware, GetUserByIdController);

module.exports = AuthRouter;

