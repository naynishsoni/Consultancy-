import React from 'react';
import { ShieldCheck, TrendingUp, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const Feature = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay * 0.1, duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition hover:-translate-y-2"
    >
        <div className="w-14 h-14 bg-brand-blue/5 rounded-lg flex items-center justify-center mb-6 text-brand-blue">
            <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

const WhyChooseUs = () => {
    const features = [
        {
            icon: ShieldCheck,
            title: "Trusted Expertise",
            description: "Over 10 years of experience delivering top-tier consultancy services to Fortune 500 companies."
        },
        {
            icon: TrendingUp,
            title: "Proven Results",
            description: "Our strategies are data-driven and focused on delivering measurable ROI for your business."
        },
        {
            icon: Users,
            title: "Client-Centric",
            description: "We view every client relationship as a partnership, customizing our approach to your unique needs."
        },
        {
            icon: Lightbulb,
            title: "Innovative Solutions",
            description: "Staying ahead of the curve with cutting-edge technologies and modern business practices."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-3">Why Choose Us</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-brand-blue">The ConsultAgency Difference</h3>
                    <div className="w-24 h-1 bg-brand-orange mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <Feature key={i} {...f} delay={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
