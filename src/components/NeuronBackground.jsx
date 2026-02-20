import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const NeuronBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        // console.log("Particles loaded", container);
    };

    if (!init) {
        return null;
    }

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                background: {
                    color: "transparent",
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "repulse",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: { distance: 250, links: { opacity: 0.8, color: "#ffffff" } },
                        repulse: { distance: 200, duration: 0.4 },
                    },
                },
                particles: {
                    color: { value: "#ffffff" },
                    links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.4, width: 1 },
                    move: { enable: true, outModes: { default: "bounce" }, random: true, speed: 1.5, straight: false },
                    number: { density: { enable: true, area: 800 }, value: 70 },
                    opacity: { value: 0.5 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
            className="fixed inset-0 pointer-events-none mix-blend-difference opacity-80"
        />
    );
};

export default NeuronBackground;
