import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectCard from '../components/ProjectCard';
import ClientTestimonial from '../components/ClientTestimonial';
import ContactForm from '../components/ContactForm';
import Newsletter from '../components/Newsletter';
import api from '../utils/api';

const LandingPage = () => {
    const [projects, setProjects] = useState([]);
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([fetchProjects(), fetchClients()]).then(() => setLoading(false));
    }, []);

    const fetchProjects = async () => API_CALL('/projects', setProjects);
    const fetchClients = async () => API_CALL('/clients', setClients);

    const API_CALL = async (endpoint, setter) => {
        try {
            const res = await api.get(endpoint);
            setter(res.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="font-sans antialiased text-gray-800 bg-gray-50 selection:bg-brand-orange selection:text-white">
            <Navbar />
            <Hero />
            <About />
            <WhyChooseUs />

            {/* Projects Section */}
            <section id="projects" className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-3">Our Work</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-brand-blue">Featured Projects</h3>
                        <div className="w-24 h-1 bg-brand-orange mx-auto mt-6 rounded-full"></div>
                    </div>

                    {loading ? (
                        <div className="flex justify-center p-12"><div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div></div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {projects.map((project) => (
                                <ProjectCard key={project._id} project={project} />
                            ))}
                        </div>
                    )}

                    {!loading && projects.length === 0 && (
                        <div className="text-center p-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                            <p className="text-gray-500 text-lg">No projects added yet. Admin can add them.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Clients Section */}
            <section id="clients" className="py-24 bg-gray-50 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute right-0 top-0 w-96 h-96 bg-brand-blue rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-3">Testimonials</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-brand-blue">Happy Clients</h3>
                        <div className="w-24 h-1 bg-brand-orange mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clients.map((client) => (
                            <ClientTestimonial key={client._id} client={client} />
                        ))}
                    </div>
                    {clients.length === 0 && (
                        <p className="text-center text-gray-500">No testimonials to display yet.</p>
                    )}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-3">Contact Us</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-brand-blue">Let's Work Together</h3>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <ContactForm />
                    </div>
                </div>
            </section>

            <Newsletter />

            <footer className="bg-brand-blue text-white py-12 border-t border-blue-900">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <div className="text-2xl font-bold tracking-tight mb-2">
                            Consult<span className="text-brand-orange">Agency</span>
                        </div>
                        <p className="text-blue-300 text-sm">Empowering businesses since 2024.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-blue-300 hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="text-blue-300 hover:text-white transition">Terms of Service</a>
                    </div>
                </div>
                <div className="text-center mt-8 text-blue-400 text-xs">
                    &copy; 2024 Consultancy Agency. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
