import React, { useState } from 'react';
import api from '../utils/api';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        city: '',
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await api.post('/contact', formData);
            setStatus('Message sent successfully!');
            setFormData({ fullName: '', email: '', mobile: '', city: '' });
            setTimeout(() => setStatus(''), 5000);
        } catch (err) {
            console.error(err);
            setStatus('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Contact Info Sidebar */}
            <div className="bg-brand-blue text-white p-10 md:w-2/5 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                    <p className="text-blue-200 mb-8">We'd love to hear from you. Fill out the form or reach us directly.</p>

                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <Phone className="text-brand-orange mt-1" />
                            <div>
                                <p className="font-semibold">Phone</p>
                                <p className="text-blue-200">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Mail className="text-brand-orange mt-1" />
                            <div>
                                <p className="font-semibold">Email</p>
                                <p className="text-blue-200">hello@consultagency.com</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <MapPin className="text-brand-orange mt-1" />
                            <div>
                                <p className="font-semibold">Office</p>
                                <p className="text-blue-200">123 Business Blvd, Tech City</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 md:mt-0">
                    <div className="w-20 h-1 bg-brand-orange mb-4"></div>
                    <p className="text-sm text-blue-300">© 2024 ConsultAgency</p>
                </div>
            </div>

            {/* Form Section */}
            <div className="p-10 md:w-3/5">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Send a Message</h2>
                {status && (
                    <div className={`p-4 rounded-lg mb-6 ${status.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {status}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-2">Mobile Number</label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                                placeholder="+1 234 567 890"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-2">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                placeholder="New York"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-orange-500/30 transition duration-300 flex justify-center items-center"
                    >
                        {loading ? 'Sending...' : <><Send size={18} className="mr-2" /> Send Message</>}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
