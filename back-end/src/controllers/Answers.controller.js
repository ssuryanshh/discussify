// answers.controllers.js

const httpStatus = require('http-status');
const {
  createAnswer,
  getAnswersByQuestionId,
  deleteAnswer
} = require('./../services/Answers.services');

async function createAnswerController(req, res) {
  try {
    const { user_id, question_id, answer_text } = req.body;
    if (!user_id || !question_id || !answer_text) {
      return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'All fields are required' });
    }
    const answer = await createAnswer(user_id, question_id, answer_text);
    return res.status(httpStatus.CREATED).json({ success: true, data: answer });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
  }
}

async function getAnswersByQuestionIdController(req, res) {
  try {
    const { questionId } = req.params;
    const answers = await getAnswersByQuestionId(questionId);
    return res.status(httpStatus.OK).json({ success: true, data: answers });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
  }
}

async function deleteAnswerController(req, res) {
  try {
    const { answerId, userId } = req.body;
    const answer = await deleteAnswer(answerId, userId);
    if (!answer) {
      return res.status(httpStatus.NOT_FOUND).json({ success: false, message: 'Answer not found or user not authorized' });
    }
    return res.status(httpStatus.OK).json({ success: true, message: 'Answer deleted successfully' });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
  }
}

module.exports = {
  createAnswerController,
  getAnswersByQuestionIdController,
  deleteAnswerController
};
