const Mentorship = require('./../models/Mentorship.model');
const User = require('./../models/Users.model');

async function requestMentorshipService(mentorId, menteeId) {
    try {
        const mentorship = await Mentorship.create({ mentor: mentorId, mentee: menteeId });
        return { success: true, data: mentorship };
    } catch (err) {
        console.error(err);
        return { success: false, message: err.message };
    }
}

async function getMentorshipsForMentorService(mentorId) {
    try {
        const mentorships = await Mentorship.find({ mentor: mentorId, status: 'pending' })
            .populate('mentee', 'name areaOfExpertise');
        return { success: true, data: mentorships };
    } catch (err) {
        console.error(err);
        return { success: false, message: err.message };
    }
}

async function getAvailableMentorsForUserService(userId) {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error('User not found');

        let availableMentors;
        const fieldsToSelect = 'username areaOfExpertise _id category';

        if (user.category === 'school') {
            availableMentors = await User.find({ 
                category: { $in: ['college', 'professional'] }, 
                isMentor: true, 
                _id: { $ne: userId } // exclude the user's own ID
            })
            .select(fieldsToSelect);
        } else if (user.category === 'college') {
            availableMentors = await User.find({ 
                category: 'professional', 
                isMentor: true, 
                _id: { $ne: userId } // exclude the user's own ID
            })
            .select(fieldsToSelect);
        } else if (user.category === 'professional') {
            availableMentors = await User.find({ 
                category: 'professional', 
                isMentor: true, 
                _id: { $ne: userId } // exclude the user's own ID
            })
            .select(fieldsToSelect);
        }

        return { success: true, data: availableMentors };
    } catch (err) {
        console.error(err);
        return { success: false, message: err.message };
    }
}


async function updateMentorshipStatusService(mentorshipId, status) {
    try {
        const mentorship = await Mentorship.findByIdAndUpdate(mentorshipId, { status: status }, { new: true });
        return { success: true, data: mentorship };
    } catch (err) {
        console.error(err);
        return { success: false, message: err.message };
    }
}

async function getMenteesForMentorService(mentorId) {
    try {
        const mentees = await Mentorship.find({ mentor: mentorId, status: 'accepted' })
            .populate('mentee', 'name category');
        return { success: true, data: mentees };
    } catch (err) {
        console.error(err);
        return { success: false, message: err.message };
    }
}

async function getMentorsForMenteeService(menteeId) {
    try {
        const mentors = await Mentorship.find({ mentee: menteeId, status: 'accepted' })
            .populate('mentor', 'name category');
        return { success: true, data: mentors };
    } catch (err) {
        console.error(err);
        return { success: false, message: err.message };
    }
}

module.exports = {
    requestMentorshipService,
    getMentorshipsForMentorService,
    getAvailableMentorsForUserService,
    updateMentorshipStatusService,getMenteesForMentorService,
    getMentorsForMenteeService
};
