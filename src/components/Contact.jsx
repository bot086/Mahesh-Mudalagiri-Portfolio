import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';

const ContactCard = ({ icon, label, link, copyText }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e) => {
        e.preventDefault(); // Prevent the main link from navigating
        navigator.clipboard.writeText(copyText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <a href={link} target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center gap-4 p-8 bg-tech-gray-900 border border-tech-gray-800 hover:border-tech-white hover:bg-tech-white transition-all duration-300 relative z-20">
            {icon}
            <span className="font-techno tracking-widest text-tech-white group-hover:text-tech-black uppercase mb-4">{label}</span>
            <span className="text-xs font-mono text-tech-gray-400 truncate w-full px-4 mb-2 opacity-50">{copyText}</span>
            <button
                onClick={handleCopy}
                className="absolute bottom-4 right-4 p-2 bg-tech-black/50 text-tech-white group-hover:bg-tech-white group-hover:text-tech-black rounded border border-tech-gray-700 transition-colors"
                title="Copy to clipboard"
            >
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
            </button>
        </a>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-transparent relative border-t border-tech-gray-800">

            {/* Structural Minimalist Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-tech-gray-400 font-techno text-sm tracking-[0.2em] mb-4 block">SEC_04</span>
                    <h2 className="text-5xl md:text-7xl font-black font-techno text-tech-white leading-none uppercase mb-6">
                        CONTACT
                    </h2>
                    <p className="text-tech-gray-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
                        Whether addressing a technical inquiry, proposing collaboration, or establishing a channel. Direct lines are open.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
                        <ContactCard
                            icon={<Mail className="text-tech-gray-400 group-hover:text-tech-black transition-colors" size={32} />}
                            label="Email"
                            link="mailto:mahesh.mudalagiri@gmail.com"
                            copyText="mahesh.mudalagiri@gmail.com"
                        />
                        <ContactCard
                            icon={<Github className="text-tech-gray-400 group-hover:text-tech-black transition-colors" size={32} />}
                            label="GitHub"
                            link="https://github.com/bot086"
                            copyText="https://github.com/bot086"
                        />
                        <ContactCard
                            icon={<Linkedin className="text-tech-gray-400 group-hover:text-tech-black transition-colors" size={32} />}
                            label="LinkedIn"
                            link="https://www.linkedin.com/in/mahesh-mudalagiri"
                            copyText="https://www.linkedin.com/in/mahesh-mudalagiri"
                        />
                    </div>
                </motion.div>

                {/* Footer Area - Brutalist layout */}
                <div className="pt-16 border-t border-tech-gray-800 flex flex-col md:flex-row items-center justify-between text-left">
                    <div className="mb-6 md:mb-0">
                        <motion.a
                            href="#"
                            className="font-techno text-3xl font-black text-tech-white tracking-tighter"
                        >
                            MAHESH.M
                        </motion.a>
                        <p className="text-xs text-tech-gray-400 mt-2 font-mono uppercase tracking-widest">
                            ENGINEERED // 2026
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <p className="text-xs text-tech-gray-400 font-mono uppercase tracking-widest mb-1 flex items-center">
                            STATUS: <span className="w-2 h-2 rounded-full bg-tech-white ml-2 animate-pulse"></span>
                        </p>
                        <a href="#hero" className="flex items-center text-xs font-techno text-tech-white hover:text-tech-gray-400 transition-colors uppercase tracking-widest mt-2 group">
                            RETURN_TO_TOP
                            <ArrowUpRight size={14} className="ml-1 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
