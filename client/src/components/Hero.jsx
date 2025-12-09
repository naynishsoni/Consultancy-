import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative bg-brand-blue text-white min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block py-1 px-3 rounded-full bg-blue-800/50 border border-blue-700 text-blue-200 text-sm font-semibold mb-6"
                    >
                        #1 Consultancy Firm
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                    >
                        Navigate Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">
                            Business Growth
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
                    >
                        Strategic insights and innovative solutions to propel your enterprise forward. We turn challenges into opportunities.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start"
                    >
                        <button className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-orange-500/30 transition transform hover:-translate-y-1">
                            Get Started
                        </button>
                        <button className="bg-transparent border border-gray-500 hover:border-white text-gray-300 hover:text-white font-bold py-4 px-8 rounded-full transition">
                            Learn More
                        </button>
                    </motion.div>
                </div>

                {/* Hero Image / Illustration Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
                >
                    <div className="relative w-full max-w-lg aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange to-blue-500 rounded-full opacity-20 blur-2xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Consulting Team"
                            className="relative rounded-2xl shadow-2xl object-cover w-full h-full border border-gray-700/50"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
