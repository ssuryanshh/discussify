import React, { useEffect, useState } from 'react';
import Avatar from "@mui/material/Avatar";
import "./Mentor.css";
import config from "./../../../config"
const {BASE_API_URL} = config;
function Mentor({ userId }) {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const response = await fetch(`${BASE_API_URL}/mentorship/available-mentors/${userId}`);
                const result = await response.json();
                if (result.success) {
                    setMentors(result.data);
                } else {
                    console.error('Failed to fetch mentors:', result.message);
                }
            } catch (error) {
                console.error('Error fetching mentors:', error);
            }
        };

        fetchMentors();
    }, [userId]);

    const handleRequestMentorship = async (mentorId) => {
        try {
            const response = await fetch(`${BASE_API_URL}/mentorship/request/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ mentorId })
            });

            const result = await response.json();
            if (result.success) {
                alert('Mentorship request sent successfully');
            } else {
                alert(`Failed to send request: ${result.message}`);
            }
        } catch (error) {
            console.error('Error requesting mentorship:', error);
        }
    };

    return (
        <div className='mentor-section-container'>
            <h1>Mentors Available for you</h1>
            <div className='mentor-container'>
                {mentors.length > 0 ? mentors.map(mentor => (
                    <div key={mentor._id} className='mentor'>
                        <Avatar>{mentor.username.charAt(0).toUpperCase()}</Avatar>
                        <h2>{mentor.username}</h2>
                        <p>{mentor.areaOfExpertise}</p>
                        <button onClick={() => handleRequestMentorship(mentor._id)}>Request Mentorship</button>
                    </div>
                )) : (
                    <p>No mentors available at the moment.</p>
                )}
            </div>
        </div>
    );
}

export default Mentor;
