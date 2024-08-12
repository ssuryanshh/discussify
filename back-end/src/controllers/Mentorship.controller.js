const {
    requestMentorshipService,
    getMentorshipsForMentorService,
    getAvailableMentorsForUserService,
    updateMentorshipStatusService,getMenteesForMentorService,
    getMentorsForMenteeService
} = require('./../services/Mentorship.services');
const httpStatus = require('http-status');

async function requestMentorshipController(req, res) {
    try {
        const { mentorId } = req.body;
        const {id} = req.params;

        const response = await requestMentorshipService(mentorId, id);
        if (response.success) {
            res.status(httpStatus.OK).json({ success: true, data: response.data });
        } else {
            throw new Error(response.message);
        }
    } catch (err) {
        console.error(err);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
}

async function getMentorshipsForMentorController(req, res) {
    try {
        const {id} = req.params;
        const response = await getMentorshipsForMentorService(id);
        if (response.success) {
            res.status(httpStatus.OK).json({ success: true, data: response.data });
        } else {
            throw new Error(response.message);
        }
    } catch (err) {
        console.error(err);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
}

async function getAvailableMentorsForUserController(req, res) {
    try {
        
        const {id} = req.params;
        const response = await getAvailableMentorsForUserService(id);
        if (response.success) {
            res.status(httpStatus.OK).json({ success: true, data: response.data });
        } else {
            throw new Error(response.message);
        }
    } catch (err) {
        console.error(err);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
}

async function updateMentorshipStatusController(req, res) {
    try {
        const { mentorshipId, status } = req.body;

        const response = await updateMentorshipStatusService(mentorshipId, status);
        if (response.success) {
            res.status(httpStatus.OK).json({ success: true, data: response.data });
        } else {
            throw new Error(response.message);
        }
    } catch (err) {
        console.error(err);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
}

async function getMenteesForMentorController(req, res) {
    try {
        const mentorId = req.user.id;
        const response = await getMenteesForMentorService(mentorId);
        if (response.success) {
            res.status(httpStatus.OK).json({ success: true, data: response.data });
        } else {
            throw new Error(response.message);
        }
    } catch (err) {
        console.error(err);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
}

async function getMentorsForMenteeController(req, res) {
    try {
        const {menteeId} = req.query;
        const response = await getMentorsForMenteeService(menteeId);
        if (response.success) {
            res.status(httpStatus.OK).json({ success: true, data: response.data });
        } else {
            throw new Error(response.message);
        }
    } catch (err) {
        console.error(err);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
}


module.exports = {
    requestMentorshipController,
    getMentorshipsForMentorController,
    getAvailableMentorsForUserController,
    updateMentorshipStatusController,getMenteesForMentorController,
    getMentorsForMenteeController
};
