import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import ImageCropper from '../components/ImageCropper';
import { LayoutDashboard, Users, MessageSquare, Mail, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('projects');
    // Data for View Tabs
    const [messages, setMessages] = useState([]);
    const [subscribers, setSubscribers] = useState([]);

    // Forms
    const [projectForm, setProjectForm] = useState({ name: '', description: '', image: null });
    const [clientForm, setClientForm] = useState({ name: '', designation: '', description: '', image: null });

    useEffect(() => {
        if (activeTab === 'messages') fetchMessages();
        if (activeTab === 'subscribers') fetchSubscribers();
    }, [activeTab]);

    const fetchMessages = async () => {
        const res = await api.get('/contact');
        setMessages(res.data);
    };

    const fetchSubscribers = async () => {
        const res = await api.get('/subscribe');
        setSubscribers(res.data);
    };

    // Handlers
    const handleProjectSubmit = async (e) => {
        e.preventDefault();
        if (!projectForm.image) return alert('Please upload and crop an image');

        const formData = new FormData();
        formData.append('name', projectForm.name);
        formData.append('description', projectForm.description);
        formData.append('image', projectForm.image); // blob

        try {
            await api.post('/projects', formData);
            alert('Project added successfully!');
            setProjectForm({ name: '', description: '', image: null });
        } catch (err) {
            console.error(err);
            alert('Error adding project');
        }
    };

    const handleClientSubmit = async (e) => {
        e.preventDefault();
        if (!clientForm.image) return alert('Please upload and crop an image');

        const formData = new FormData();
        formData.append('name', clientForm.name);
        formData.append('designation', clientForm.designation);
        formData.append('description', clientForm.description);
        formData.append('image', clientForm.image);

        try {
            await api.post('/clients', formData);
            alert('Client added successfully!');
            setClientForm({ name: '', designation: '', description: '', image: null });
        } catch (err) {
            console.error(err);
            alert('Error adding client');
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-brand-blue text-white flex flex-col">
                <div className="p-6 text-2xl font-bold border-b border-blue-800">Admin Panel</div>
                <nav className="flex-1 p-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`flex items-center space-x-3 w-full p-3 rounded transition ${activeTab === 'projects' ? 'bg-brand-orange' : 'hover:bg-blue-800'}`}
                    >
                        <PlusCircle size={20} /> <span>Add Project</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('clients')}
                        className={`flex items-center space-x-3 w-full p-3 rounded transition ${activeTab === 'clients' ? 'bg-brand-orange' : 'hover:bg-blue-800'}`}
                    >
                        <Users size={20} /> <span>Add Client</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('messages')}
                        className={`flex items-center space-x-3 w-full p-3 rounded transition ${activeTab === 'messages' ? 'bg-brand-orange' : 'hover:bg-blue-800'}`}
                    >
                        <MessageSquare size={20} /> <span>View Messages</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('subscribers')}
                        className={`flex items-center space-x-3 w-full p-3 rounded transition ${activeTab === 'subscribers' ? 'bg-brand-orange' : 'hover:bg-blue-800'}`}
                    >
                        <Mail size={20} /> <span>Subscribers</span>
                    </button>
                </nav>
                <div className="p-4 border-t border-blue-800">
                    <Link to="/" className="text-sm hover:text-gray-300">Back to Website</Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 capitalize">{activeTab.replace('-', ' ')}</h1>

                {activeTab === 'projects' && (
                    <div className="bg-white p-6 rounded shadow max-w-2xl">
                        <form onSubmit={handleProjectSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium">Project Name</label>
                                <input
                                    type="text"
                                    className="w-full border p-2 rounded"
                                    value={projectForm.name}
                                    onChange={e => setProjectForm({ ...projectForm, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Description</label>
                                <textarea
                                    className="w-full border p-2 rounded h-24"
                                    value={projectForm.description}
                                    onChange={e => setProjectForm({ ...projectForm, description: e.target.value })}
                                    required
                                />
                            </div>
                            {/* Image Cropper */}
                            <ImageCropper
                                aspectRatio={9 / 7}
                                onCropComplete={(blob) => setProjectForm({ ...projectForm, image: blob })}
                            />
                            {projectForm.image && <p className="text-green-600 text-sm">Image cropped and ready.</p>}

                            <button type="submit" className="bg-brand-blue text-white px-6 py-2 rounded hover:bg-blue-800">
                                Add Project
                            </button>
                        </form>
                    </div>
                )}

                {activeTab === 'clients' && (
                    <div className="bg-white p-6 rounded shadow max-w-2xl">
                        <form onSubmit={handleClientSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium">Client Name</label>
                                <input
                                    type="text"
                                    className="w-full border p-2 rounded"
                                    value={clientForm.name}
                                    onChange={e => setClientForm({ ...clientForm, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Designation</label>
                                <input
                                    type="text"
                                    className="w-full border p-2 rounded"
                                    value={clientForm.designation}
                                    onChange={e => setClientForm({ ...clientForm, designation: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Testimonial</label>
                                <textarea
                                    className="w-full border p-2 rounded h-24"
                                    value={clientForm.description}
                                    onChange={e => setClientForm({ ...clientForm, description: e.target.value })}
                                    required
                                />
                            </div>
                            {/* Image Cropper */}
                            <ImageCropper
                                aspectRatio={9 / 7}
                                onCropComplete={(blob) => setClientForm({ ...clientForm, image: blob })}
                            />
                            {clientForm.image && <p className="text-green-600 text-sm">Image cropped and ready.</p>}

                            <button type="submit" className="bg-brand-blue text-white px-6 py-2 rounded hover:bg-blue-800">
                                Add Client
                            </button>
                        </form>
                    </div>
                )}

                {activeTab === 'messages' && (
                    <div className="bg-white rounded shadow overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Mobile</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messages.map((msg) => (
                                    <tr key={msg._id}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{msg.fullName}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{msg.email}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{msg.mobile}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{msg.city}</td>
                                    </tr>
                                ))}
                                {messages.length === 0 && <tr><td colSpan="4" className="text-center py-4 text-gray-500">No messages found.</td></tr>}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'subscribers' && (
                    <div className="bg-white rounded shadow overflow-hidden max-w-xl">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Subscribed At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subscribers.map((sub) => (
                                    <tr key={sub._id}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{sub.email}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{new Date(sub.subscribedAt).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                                {subscribers.length === 0 && <tr><td colSpan="2" className="text-center py-4 text-gray-500">No subscribers found.</td></tr>}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminPanel;
