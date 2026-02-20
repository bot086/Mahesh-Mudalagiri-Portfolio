import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Download } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const opacity1 = useTransform(scrollY, [0, 500], [1, 0]);

    // Techwear style exact snap animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "tween", duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20">

            {/* Background Grid Pattern (Subtle) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(120,120,120,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

            <motion.div
                style={{ y: y1, opacity: opacity1 }}
                className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
                {/* Left Side: Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
                >
                    {/* Eyebrow Text */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center space-x-2 font-techno tracking-widest mb-2 border px-4 py-1 rounded-full text-xs text-tech-white border-tech-gray-800"
                    >
                        <span className="uppercase text-xs font-bold">SYS.ENG // 001</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div variants={itemVariants} className="relative">
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-black font-techno tracking-tighter leading-none relative z-10"
                        >
                            <span className="text-white">MAHESH</span> <br /> <span className="text-red-600">MUDALAGIRI</span>
                        </motion.h1>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-8 flex flex-col sm:flex-row gap-4"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            className="px-8 py-3 bg-transparent text-tech-white font-bold font-techno border border-tech-white transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-opacity-10 hover:bg-white dark:hover:bg-white dark:hover:text-black"
                        >
                            <Code2 size={20} />
                            EXPLORE
                        </motion.a>

                        <motion.a
                            href="./resume.pdf"
                            download="Mahesh_Mudalagiri_Resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            className="px-8 py-3 bg-white text-tech-black font-bold font-techno border border-tech-white transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-transparent hover:text-tech-white"
                        >
                            <Download size={20} />
                            RESUME
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right Side: Hero Blend Image */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative w-full aspect-square flex items-center justify-center lg:justify-end"
                >
                    <div
                        className="w-full h-full max-w-md bg-no-repeat bg-center bg-cover rounded-3xl"
                        style={{
                            backgroundImage: `url('./hero-image.jpg')`,
                            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                            boxShadow: '0 20px 50px -10px rgba(0,0,0,0.5)'
                        }}
                    />
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="lg:col-span-2 flex flex-col items-center mt-12 text-tech-gray-500"
                >
                    <span className="font-techno text-xs tracking-[0.3em] uppercase mb-4 opacity-70">DESCEND</span>
                    <div className="w-[1px] h-12 overflow-hidden relative bg-tech-gray-800">
                        <motion.div
                            animate={{ top: ["-100%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="absolute left-0 w-full h-1/2 bg-tech-white"
                        />
                    </div>
                </motion.div>
            </motion.div>

        </section>
    );
};

export default Hero;
