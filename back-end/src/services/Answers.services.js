// answers.services.js

const Answer = require('./../models/Answers.model');

async function createAnswer(user_id, question_id, answer_text) {
  const answer = new Answer({ user_id, question_id, answer_text });
  await answer.save();
  return answer;
}

async function getAnswersByQuestionId(questionId) {
  return await Answer.find({ question_id: questionId }).populate('user_id', 'username');
}

async function deleteAnswer(answerId, userId) {
  const answer = await Answer.findOneAndDelete({ _id: answerId, user_id: userId });
  return answer;
}

module.exports = {
  createAnswer,
  getAnswersByQuestionId,
  deleteAnswer
};
