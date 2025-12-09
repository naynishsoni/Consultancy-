import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-brand-orange -mt-4 -ml-4"></div>
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-brand-blue -mb-4 -mr-4"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="About Us"
                                className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
                            />
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">Who We Are</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mt-2 mb-6">Driving Success Through Innovation</h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            At ConsultAgency, we believe in the power of strategic thinking and innovative solutions. Founded in 2024, we have helped hundreds of businesses navigate the complexities of the modern market.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Our team of experts brings decades of combined experience across various industries. We don't just advise; we partner with you to implement sustainable growth strategies that deliver real results.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-4 border-brand-blue pl-4">
                                <span className="block text-3xl font-bold text-gray-900">500+</span>
                                <span className="text-gray-600">Projects Completed</span>
                            </div>
                            <div className="border-l-4 border-brand-orange pl-4">
                                <span className="block text-3xl font-bold text-gray-900">98%</span>
                                <span className="text-gray-600">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
