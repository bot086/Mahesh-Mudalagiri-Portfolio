# Mahesh Mudalagiri's Portfolio

A modern, interactive, and high-performance portfolio website built to showcase my projects, skills, and background as a Computer Science Engineer.

Designed with a sleek **Techwear Brutalism** aesthetic, it features a stark monochrome high-contrast dark theme, engaging micro-animations, bouncy scrolling, and an embedded interactive neuron background.

## 🚀 Live Demo

[View Live Portfolio](https://bot086.github.io/Mahesh-Mudalagiri-Portfolio/)

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Particles**: [tsParticles](https://particles.js.org/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## ✨ Key Features

- **Extreme Glassmorphism Navbar**: A sticky horizontal top navigation bar embedded with a custom `react-tsparticles` glowing red neuron sub-web that reacts to hover states.
- **Hero Mask Blending**: A personal photo (`hero-image.jpg`) blended seamlessly into the minimalist background using a CSS radial-gradient mask.
- **Interactive UI**: Custom crosshair cursors on the Skills section, snappy linear animations, and hover-triggered high-contrast black/white styling.
- **Instant Copy-to-Clipboard**: Contact links (Email, GitHub, LinkedIn) feature one-click raw URL copying straight to your system clipboard with instant visual feedback.
- **Automated Deployment**: Custom `package.json` scripts configured to minify and auto-deploy to the `gh-pages` branch on every run.

## 💻 Local Development

To run this project on your own machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bot086/Mahesh-Mudalagiri-Portfolio.git
   cd Mahesh-Mudalagiri-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Vite development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 📦 Maintenance and Updates

Updating this portfolio is incredibly simple:

- **Change Photo:** Replace `public/hero-image.jpg` with a new file (keeping the same name).
- **Update Resume:** Replace `public/resume.pdf` with your updated version.
- **Edit Text:** Find the relevant component in `src/components/` (e.g., `About.jsx` or `Projects.jsx`).

Once you make any changes, run the following command to bundle and push them live to GitHub Pages:
```bash
npm run deploy
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
