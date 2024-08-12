const httpStatus = require("http-status");
const {
    CreateQuestionService,
    GetQuestionsByCategoryService,
    GetQuestionByIdService,
    GetQuestionsByUserIdService
} = require("./../services/Questions.services");

async function CreateQuestionController(req, res) {
    try {
        const { user_id, question_text} = req.body;
        const response = await CreateQuestionService(user_id, question_text);
        if (response.success) {
            res.status(httpStatus.CREATED).json(response);
        } else {
            res.status(httpStatus.BAD_REQUEST).json(response);
        }
    } catch (err) {
        console.error(err);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
}

async function GetQuestionsByCategoryController(req, res) {
    try {
        const { category } = req.params;
        const response = await GetQuestionsByCategoryService(category);
        if (response.success) {
            res.status(httpStatus.OK).json(response);
        } else {
            res.status(httpStatus.BAD_REQUEST).json(response);
        }
    } catch (err) {
        console.error(err);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
}

async function GetQuestionByIdController(req, res) {
    try {
        const { id } = req.params;
        const response = await GetQuestionByIdService(id);
        if (response.success) {
            res.status(httpStatus.OK).json(response);
        } else {
            res.status(httpStatus.NOT_FOUND).json(response);
        }
    } catch (err) {
        console.error(err);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
}

async function GetQuestionsByUserIdController(req, res) {
    try {
        const  {userId}  = req.params;
        const response = await GetQuestionsByUserIdService(userId);
        if (response.success) {
            res.status(httpStatus.OK).json(response);
        } else {
            res.status(httpStatus.NOT_FOUND).json(response);
        }
    } catch (err) {
        console.error(err);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
}


module.exports = {
    CreateQuestionController,
    GetQuestionsByCategoryController,
    GetQuestionByIdController,
    GetQuestionsByUserIdController
};
