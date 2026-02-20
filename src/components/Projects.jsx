import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Traffic Accident Analysis",
            description: "Intelligent system engineered to parse video feeds, detect vehicular collisions, and predict severity in real-time. Slated for academic presentation at VEHITS 2026.",
            techStack: ["Python", "OpenCV", "PyTorch", "Colab"],
            githubLink: "https://github.com/bot086",
            demoLink: "#",
            type: "CV / ML"
        },
        {
            title: "Real-Time Face Recognition",
            description: "Secure dashboard integrating real-time face detection algorithms. Interfaces with Telegram API for instant alert dispatch and remote monitoring capabilities.",
            techStack: ["Python", "dlib", "Flask", "Telegram API"],
            githubLink: "https://github.com/bot086",
            demoLink: "#",
            type: "SECURITY"
        },
        {
            title: "Legal Document Simplifier",
            description: "Specialized ML tool designed to distill complex Indian legal jargon into actionable plain language via RAG architecture.",
            techStack: ["Python", "LangChain", "Transformers", "Flask"],
            githubLink: "https://github.com/bot086",
            demoLink: "#",
            type: "NLP / RAG"
        }
    ];

    return (
        <section id="projects" className="py-32 bg-transparent relative">

            {/* Structural Accent Lines */}
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-tech-gray-800 hidden lg:block" />
            <div className="absolute right-8 top-0 bottom-0 w-[1px] bg-tech-gray-800 hidden lg:block" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="mb-20">
                    <span className="text-tech-gray-400 font-techno text-sm tracking-[0.2em] mb-4 block">SEC_03</span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-7xl font-black font-techno text-tech-white leading-none uppercase"
                    >
                        PROJECTS
                    </motion.h2>
                </div>

                <div className="flex flex-col gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative bg-tech-gray-900 border border-tech-gray-800 hover:border-tech-white transition-colors duration-300"
                        >

                            {/* Top Bar */}
                            <div className="h-10 border-b border-tech-gray-800 flex items-center justify-between px-6 bg-tech-black">
                                <div className="flex space-x-2">
                                    <div className="w-2 h-2 bg-tech-gray-700 rounded-full group-hover:bg-tech-white transition-colors" />
                                    <div className="w-2 h-2 bg-tech-gray-700 rounded-full" />
                                </div>
                                <span className="text-xs font-mono text-tech-gray-400 uppercase tracking-widest">{project.type} // 0{idx + 1}</span>
                            </div>

                            <div className="p-8 lg:p-12 flex flex-col lg:flex-row gap-8 justify-between">

                                {/* Info Area */}
                                <div className="lg:w-2/3 flex flex-col">
                                    <h3 className="text-3xl md:text-4xl font-black font-techno text-tech-white uppercase tracking-tighter mb-4 group-hover:text-outline-hover transition-all duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-tech-gray-400 mb-8 max-w-2xl leading-relaxed font-light text-lg">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.techStack.map((tech, tIdx) => (
                                                <span key={tIdx} className="text-xs font-mono text-tech-white border border-tech-gray-700 px-3 py-1 uppercase tracking-wider">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Interaction Area */}
                                <div className="lg:w-1/3 flex lg:flex-col justify-end lg:justify-between items-end lg:items-end gap-4 border-t lg:border-t-0 lg:border-l border-tech-gray-800 pt-6 lg:pt-0 lg:pl-8">

                                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-techno tracking-widest uppercase text-tech-white group/btn">
                                        VIEW_SOURCE
                                        <div className="ml-4 p-2 bg-tech-white text-tech-black group-hover/btn:translate-x-2 transition-transform duration-300 rounded-full">
                                            <Github size={16} />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
