const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    question_text: { type: String, required: true },
    category: {type:mongoose.Schema.category, ref:'User', required:true},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    category: { type: String, enum: ['school', 'college', 'professional'], required: true }
});

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;
