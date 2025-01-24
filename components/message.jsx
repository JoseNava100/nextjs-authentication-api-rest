'use client';

import { useEffect, useState } from 'react';
import { getValidationMessage } from '@/services/validationService';

export default function Message() {

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getValidationMessage()
            .then(data => setMessage(data))
            .catch(err => setError('Error fetching data'));
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    if (!message) {
        return <p>Loading...</p>;
    }

    return (
        <div className='text-center flex justify-center items-center'>
            <h1>Validation Message</h1>
            <p>Message: {message.message}</p>
            <p>Status: {message.status}</p>
        </div>
    );
}
