import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Terminal, MonitorPlay, Settings } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Terminal className="text-tech-white" size={24} />,
            skills: ["Python", "JavaScript", "C++", "SQL", "HTML5", "CSS3"]
        },
        {
            title: "AI & Machine Learning",
            icon: <BrainCircuit className="text-tech-white" size={24} />,
            skills: ["PyTorch", "OpenCV", "dlib", "Face Recognition", "Scikit-learn", "RAG"]
        },
        {
            title: "Web Development",
            icon: <Code2 className="text-tech-white" size={24} />,
            skills: ["Flask", "Node.js", "React", "Bootstrap", "Tailwind CSS"]
        },
        {
            title: "Video & Motion Graphics",
            icon: <MonitorPlay className="text-tech-white" size={24} />,
            skills: ["DaVinci Resolve", "Adobe After Effects", "Color Grading", "Post-production"]
        },
        {
            title: "Tools & Platforms",
            icon: <Settings className="text-tech-white" size={24} />,
            skills: ["Git", "Google Colab", "macOS Terminal", "Homebrew", "Telegram Bot API"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "tween", duration: 0.3 }
        }
    };

    return (
        <section id="skills" className="py-32 bg-transparent relative border-t border-tech-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-tech-gray-800 pb-8">
                    <div>
                        <span className="text-tech-gray-400 font-techno text-sm tracking-[0.2em] mb-4 block">SEC_02</span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black font-techno text-tech-white uppercase leading-none"
                        >
                            SKILLS
                        </motion.h2>
                    </div>
                    <div className="hidden md:block text-tech-gray-400 font-mono text-sm">
                        MODULES_LOADED: {skillCategories.length}
                    </div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-tech-gray-800"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{
                                backgroundColor: "#171717",
                            }}
                            className="bg-tech-black p-8 border-r border-b border-tech-gray-800 transition-colors duration-300 relative group overflow-hidden"
                        >
                            {/* Geometric Hover Accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 bg-tech-white opacity-0 group-hover:opacity-10 transition-opacity transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 duration-300" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

                            <div className="flex items-center space-x-4 mb-8">
                                <div className="p-3 bg-tech-gray-900 border border-tech-gray-800 rounded-none">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-techno text-tech-white tracking-wide uppercase">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <motion.span
                                        key={sIdx}
                                        whileHover={{ backgroundColor: "#FFFFFF", color: "#0A0A0A" }}
                                        className="px-3 py-1 bg-tech-gray-900 text-tech-gray-200 text-xs font-mono uppercase tracking-wider border border-tech-gray-800 transition-colors duration-200 cursor-crosshair"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
