const express = require("express");
const {
    CreateQuestionController,
    GetQuestionsByCategoryController,
    GetQuestionByIdController,
    GetQuestionsByUserIdController
} = require("./../controllers/Questions.controller");

const QuestionRouter = express.Router();

QuestionRouter.post("/create", CreateQuestionController);
QuestionRouter.get("/category/:category", GetQuestionsByCategoryController);
QuestionRouter.get("/:id", GetQuestionByIdController);
QuestionRouter.get("/user/:userId", GetQuestionsByUserIdController);

module.exports = QuestionRouter;
