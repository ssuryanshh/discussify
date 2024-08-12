const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    question_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    answer_text: { type: String, required: true, maxlength: 1000 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, { timestamps: true });

const Answer = mongoose.model("Answer", AnswerSchema);
module.exports = Answer;
