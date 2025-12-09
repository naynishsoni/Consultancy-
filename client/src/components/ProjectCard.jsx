import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
        >
            <div className="relative overflow-hidden h-64">
                <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-colors z-10 duration-300"></div>
                <img
                    src={project.image.startsWith('http') ? project.image : `http://localhost:5000${project.image}`}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-orange transition-colors">
                    {project.name}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                </p>
                <button className="flex items-center text-brand-blue font-semibold group-hover:text-brand-orange transition-colors">
                    Read Case Study <ArrowRight size={18} className="ml-2" />
                </button>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
