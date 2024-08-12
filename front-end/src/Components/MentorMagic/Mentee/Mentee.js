import React, { useEffect, useState } from 'react';
import Avatar from "@mui/material/Avatar";
import "./Mentee.css";

function Mentee({ userId }) {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchMenteeRequests = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/mentorship/mentor/requests/${userId}`);
                const result = await response.json();
                if (result.success) {
                    setRequests(result.data);
                } else {
                    console.error('Failed to fetch mentee requests:', result.message);
                }
            } catch (error) {
                console.error('Error fetching mentee requests:', error);
            }
        };

        fetchMenteeRequests();
    }, [userId]);

    const updateRequestStatus = async (requestId, status) => {
        try {
            const response = await fetch(`http://localhost:4000/api/mentorship/update-status`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ mentorshipId: requestId, status })
            });

            const result = await response.json();
            if (result.success) {
                alert(`Mentorship request ${status}`);
                // Update the list after accepting or rejecting
                setRequests(requests.filter(request => request._id !== requestId));
            } else {
                alert(`Failed to update request status: ${result.message}`);
            }
        } catch (error) {
            console.error('Error updating mentorship request status:', error);
        }
    };

    const handleAcceptRequest = (requestId) => {
        updateRequestStatus(requestId, 'accepted');
    };

    const handleRejectRequest = (requestId) => {
        updateRequestStatus(requestId, 'rejected');
    };

    return (
        <div className='mentee-section-container'>
            <h1>Mentees Requesting Mentorship</h1>
            <div className='mentee-container'>
                {requests.length > 0 ? requests.map(request => (
                    <div key={request._id} className='mentee'>
                        <Avatar>{request.mentee.name.charAt(0).toUpperCase()}</Avatar>
                        <h2 className='mentee'>{request.mentee.name}</h2>
                        <p>{request.mentee.areaOfExpertise}</p>
                        <div className='mentor-button'>
                            <button className='accept' onClick={() => handleAcceptRequest(request._id)}>Accept Request</button>
                            <button className='reject' onClick={() => handleRejectRequest(request._id)}>Reject Request</button>
                        </div>
                    </div>
                )) : (
                    <p>No mentee requests at the moment.</p>
                )}
            </div>
        </div>
    );
}

export default Mentee;
