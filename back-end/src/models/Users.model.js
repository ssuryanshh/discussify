const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    category: {
        type: String,
        enum: ['school', 'college', 'professional'],
        default: 'school'
    },
    credits: { type: Number, default: 100 },
    isMentor: { type: Boolean, required: true },
    areaOfExpertise: { type: String }, 
    activeMentors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    activeMentees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

UserSchema.pre('save', function (next) {
    if (this.isMentor && !this.areaOfExpertise) {
        return next(new Error('Area of Expertise is required for mentors.'));
    }
    next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
