import React, { useState } from 'react';
import api from '../utils/api';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/subscribe', { email });
            setMessage('Subscribed successfully!');
            setEmail('');
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setMessage(err.response.data.message);
            } else {
                setMessage('Subscription failed.');
            }
        }
    };

    return (
        <div className="bg-brand-blue py-12 text-center text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
                <p className="mb-6">Stay updated with our latest news and insights.</p>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full md:w-96 px-4 py-3 rounded text-gray-800 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition duration-300"
                    >
                        Subscribe
                    </button>
                </form>
                {message && <p className="mt-4 text-sm font-semibold">{message}</p>}
            </div>
        </div>
    );
};

export default Newsletter;
