const Question = require("./../models/Questions.model");
const User = require("../models/Users.model");

async function CreateQuestionService(userId, questionText) {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        const question = await Question.create({
            user_id: userId,
            question_text: questionText,
            category: user.category
        });

        return { success: true, data: question };
    } catch (err) {
        console.error(err);
        return { success: false, message: err.message };
    }
}

async function GetQuestionsByCategoryService(category) {
    try {
        const visibility = ['school'];
        if (category === 'college') visibility.push('college');
        if (category === 'professional') visibility.push('college', 'professional');

        const questions = await Question.find({ category: { $in: visibility } }).populate('user_id','_id username');
        return { success: true, data: questions };
    } catch (err) {
        console.error(err);
        return { success: false, message: err.message };
    }
}

async function GetQuestionByIdService(id) {
    try {
        const question = await Question.findById(id).populate('user_id','_id username');
        if (question) {
            return { success: true, data: question };
        } else {
            throw new Error("Question not found");
        }
    } catch (err) {
        console.error(err);
        return { success: false, message: err.message };
    }
}

async function GetQuestionsByUserIdService(userId) {
    try {
        const questions = await Question.find({ user_id: userId })
            .populate('user_id', 'username') // only select the username field from the user_id document
            .select('question_text created_at'); // only select the question_text and created_at fields from the question document
        return { success: true, data: questions };
    } catch (err) {
        console.error(err);
        return { success: false, message: err.message };
    }
}

module.exports = {
    CreateQuestionService,
    GetQuestionsByCategoryService,
    GetQuestionByIdService,
    GetQuestionsByUserIdService
};
