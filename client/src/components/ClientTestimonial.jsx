import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const ClientTestimonial = ({ client }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 relative group"
        >
            <div className="absolute top-4 right-6 text-gray-200 group-hover:text-brand-orange/20 transition-colors">
                <Quote size={40} fill="currentColor" />
            </div>

            <div className="w-24 h-24 mb-6 relative">
                <div className="absolute inset-0 bg-brand-orange rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img
                    src={client.image.startsWith('http') ? client.image : `http://localhost:5000${client.image}`}
                    alt={client.name}
                    className="w-full h-full rounded-full object-cover border-2 border-white shadow-md relative z-10"
                />
            </div>

            <p className="text-gray-600 italic mb-6 leading-relaxed relative z-10">
                "{client.description}"
            </p>

            <div className="mt-auto">
                <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
                <p className="text-brand-orange font-medium text-sm tracking-wide uppercase mt-1">
                    {client.designation}
                </p>
            </div>
        </motion.div>
    );
};

export default ClientTestimonial;
