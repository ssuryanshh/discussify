// answers.routes.js

const express = require('express');
const {
  createAnswerController,
  getAnswersByQuestionIdController,
  deleteAnswerController
} = require('./../controllers/Answers.controller');

const router = express.Router();

router.post('/create', createAnswerController);
router.get('/:questionId', getAnswersByQuestionIdController);
router.delete('/', deleteAnswerController);

module.exports = router;
