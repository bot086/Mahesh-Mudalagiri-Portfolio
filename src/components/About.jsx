import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 bg-transparent relative">

            {/* Decorative Line Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(120,120,120,0.1)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 border-b border-tech-gray-800 pb-8 uppercase"
                >
                    <span className="text-tech-gray-400 font-techno text-sm tracking-[0.2em] mb-4 block">SEC_01</span>
                    <h2 className="text-5xl md:text-7xl font-black font-techno text-tech-white">
                        ABOUT
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-16 items-start max-w-3xl">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-8 text-tech-gray-400 text-lg leading-relaxed font-light"
                    >
                        <p>
                            I am a Computer Science Engineer and creative technologist bridging the gap between sophisticated backend logic and seamless user experiences.
                        </p>
                        <p>
                            With a strong foundation in <strong className="text-tech-white font-techno font-normal tracking-wide uppercase">Machine Learning</strong> and <strong className="text-tech-white font-techno font-normal tracking-wide uppercase">Computer Vision</strong>, I specialize in building intelligent systems that solve real-world problems—from traffic safety analysis to legal document simplification.
                        </p>
                        <p>
                            Beyond the code, my background as a Video Production Lead has honed my eye for detail and storytelling. This allows me to approach development with technical precision and aesthetic austerity.
                        </p>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
