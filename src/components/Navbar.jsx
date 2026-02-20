import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Navbar = () => {
    const { scrollY } = useScroll();
    const [init, setInit] = useState(false);
    const [activeSection, setActiveSection] = useState('About');

    // Add a blur/background opacity as you scroll down
    const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });

        // Optional: Intersection Observer to update activeSection automatically
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const link = navLinks.find(l => l.href === `#${sectionId}`);
                    if (link) setActiveSection(link.name);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { name: 'ABOUT', href: '#about' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'PROJECTS', href: '#projects' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4"
        >
            <motion.div
                style={{ opacity: bgOpacity }}
                className="absolute inset-0 bg-tech-black/60 backdrop-blur-md border-b border-tech-gray-800 pointer-events-none"
            />

            <div className="relative flex items-center bg-tech-gray-900 border border-tech-gray-700/50 shadow-2xl px-2 py-2 overflow-hidden group">

                {/* Embedded Neuron Particles specific to the Navbar highlight */}
                {init && (
                    <Particles
                        id="navbar-particles"
                        options={{
                            fullScreen: { enable: false },
                            background: { color: "transparent" },
                            fpsLimit: 60,
                            interactivity: {
                                events: {
                                    onHover: { enable: true, mode: "grab" },
                                },
                                modes: {
                                    grab: { distance: 100, links: { opacity: 0.8, color: "#ff0000" } }, // Red glow for highlighting
                                },
                            },
                            particles: {
                                color: { value: "#ffffff" },
                                links: { color: "#ffffff", distance: 40, enable: true, opacity: 0.2, width: 1 },
                                move: { enable: true, speed: 0.5, random: true },
                                number: { density: { enable: true, area: 400 }, value: 30 },
                                opacity: { value: 0.3 },
                                shape: { type: "circle" },
                                size: { value: { min: 0.5, max: 1.5 } },
                            },
                            detectRetina: true,
                        }}
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                    />
                )}

                <div className="relative z-10 flex space-x-2 sm:space-x-8 px-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveSection(link.name)}
                            className={`font-techno text-xs sm:text-sm tracking-[0.2em] uppercase px-4 py-2 transition-all duration-300 relative ${activeSection === link.name ? 'text-tech-white' : 'text-tech-gray-500 hover:text-tech-gray-300'
                                }`}
                        >
                            {link.name}
                            {activeSection === link.name && (
                                <motion.div
                                    layoutId="navHighlight"
                                    className="absolute inset-0 border border-tech-gray-600 bg-tech-white/5 pointer-events-none"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
