const express = require('express');
const {
    requestMentorshipController,
    getMentorshipsForMentorController,
    getAvailableMentorsForUserController,
    updateMentorshipStatusController,getMenteesForMentorController,
    getMentorsForMenteeController
} = require('./../controllers/Mentorship.controller');

const router = express.Router();

router.post('/request/:id', requestMentorshipController);
router.get('/mentor/requests/:id', getMentorshipsForMentorController);
router.get('/available-mentors/:id', getAvailableMentorsForUserController);
router.post('/update-status', updateMentorshipStatusController);
router.get('/mentor/mentees', getMenteesForMentorController);
router.get('/mentee/mentors', getMentorsForMenteeController);


module.exports = router;
