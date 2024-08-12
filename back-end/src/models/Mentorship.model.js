const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorshipSchema = new Schema({
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    mentee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

MentorshipSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Mentorship = mongoose.model('Mentorship', MentorshipSchema);

module.exports = Mentorship;
