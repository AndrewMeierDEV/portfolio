import { useEffect, useRef, useState } from "react";
import "./index.css";

const skills = ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "Prisma", "SQL", "WordPress"];
const projects = [
  { title: "Atlas Dashboard", category: "Dashboard", description: "Un concepto de panel de administración para organizar usuarios, pedidos y métricas en un solo lugar.", tags: ["React", "Charts", "Design System"], type: "dashboard" },
  { title: "Northwind Studio", category: "Landing page", description: "Una propuesta de sitio para un estudio creativo, con tipografía protagonista y una experiencia directa.", tags: ["Next.js", "Tailwind", "SEO"], type: "studio" },
  { title: "TaskFlow App", category: "Web app", description: "Un concepto de gestor de tareas con tableros visuales y un flujo de trabajo simple y organizado.", tags: ["Node.js", "NestJS", "Prisma"], type: "tasks" },
];

function MatrixRain({ paused }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0, height = 0, drops = [], frame = 0, previous = 0;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/{}[]();=+-*";
    function draw() {
      context.fillStyle = "#07110bd0";
      context.fillRect(0, 0, width, height);
      context.font = "13px monospace";
      drops.forEach((drop, index) => {
        for (let trail = 0; trail < 18; trail++) {
          context.fillStyle = trail === 0 ? "#c7ffdb" : `rgba(63, 230, 121, ${(1 - trail / 18) * 0.55})`;
          context.fillText(characters[(index * 7 + trail * 3 + Math.floor(drop)) % characters.length], index * 19, (drop - trail) * 19);
        }
        drops[index] = drop * 19 > height + 350 ? -Math.random() * 20 : drop + 0.35;
      });
    }
    function resize() {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width; height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio; canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      drops = Array.from({ length: Math.ceil(width / 19) }, () => Math.random() * (height / 19 + 18));
      draw();
    }
    function animate(time) {
      if (time - previous > 65) { draw(); previous = time; }
      frame = requestAnimationFrame(animate);
    }
    function sync() {
      cancelAnimationFrame(frame);
      if (!paused && !reducedMotion.matches && !document.hidden) frame = requestAnimationFrame(animate);
    }
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize(); sync();
    reducedMotion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(frame); observer.disconnect();
      reducedMotion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);
  return <canvas ref={canvasRef} className="matrix-canvas" aria-hidden="true" />;
}

function ProjectPreview({ type }) {
  return <div className={`project-preview ${type}`} aria-hidden="true">
    <div className="mock-window">
      <div className="mock-toolbar"><i /><i /><i /><span>{type === "dashboard" ? "atlas / overview" : type === "studio" ? "northwind.studio" : "taskflow / workspace"}</span></div>
      {type === "dashboard" ? <div className="mock-dashboard"><div className="mock-sidebar">a.<b /><b /><b /></div><div className="mock-dashboard-main"><span>Overview</span><div className="mock-stats"><b>24.8k<small>Visitors</small></b><b>1,482<small>Orders</small></b><b>+18.6%<small>Growth</small></b></div><div className="mock-chart">{[32, 48, 39, 61, 46, 74, 63, 85, 72, 96, 83, 110].map((height, i) => <i key={i} style={{ height }} />)}</div></div></div>
      : type === "studio" ? <div className="mock-studio"><span>INDEPENDENT CREATIVE STUDIO</span><strong>Ideas into<br /><em>experiences.</em></strong><div className="studio-orbit" /><small>Strategy. Design. Digital. ↗</small></div>
      : <div className="mock-board">{["To do", "In progress", "Done"].map((label, i) => <div key={label}><span><i />{label}</span>{Array.from({length: i === 1 ? 2 : 3}, (_, j) => <div className="mock-task" key={j}><b /><p>{["Design system", "API integration", "New components"][(i + j) % 3]}</p><small /><em>AM</em></div>)}</div>)}</div>}
    </div>
  </div>;
}

function App() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="portfolio-shell" id="top">
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Andres Meier, inicio">am<span>.</span></a>
        <nav aria-label="Navegación principal"><a href="#projects">Proyectos</a><a href="#stack">Stack</a><a className="nav-contact" href="#contact">Hablemos <span>↗</span></a></nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> FULL STACK DEVELOPER</p>
            <h1 id="hero-title">Andres<br /><span>Meier<span className="name-dot">.</span></span></h1>
            <p className="hero-lead">De una idea a algo que funciona.</p>
            <p className="hero-text">Desarrollo experiencias web claras, rápidas y útiles. Conecto diseño, frontend y backend para dar vida a productos con atención al detalle.</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#projects">Explorar proyectos <span>↗</span></a><a className="btn btn-secondary" href="#contact">Contactame <span>→</span></a></div>
            <div className="hero-footnote"><span>01 / PRESENTACIÓN</span><a href="#projects">Seguí explorando ↓</a></div>
          </div>
          <div className="hero-visual">
            <MatrixRain paused={paused} />
            <div className="visual-topline"><span><i /> THE CODE BEHIND THE IDEAS</span><button onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? "Reanudar animación Matrix" : "Pausar animación Matrix"}>{paused ? "Reanudar ▷" : "Pausar Ⅱ"}</button></div>
            <div className="terminal">
              <div className="terminal-bar"><div className="window-dots"><i /><i /><i /></div><span>developer.ts</span><span>⌘</span></div>
              <div className="terminal-code"><p><span className="code-muted">// Convirtiendo ideas en productos</span></p><p><span className="code-purple">const</span> developer = {'{'}</p><p>  name: <span className="code-green">"Andres Meier"</span>,</p><p>  role: <span className="code-green">"Full Stack Developer"</span>,</p><p>  stack: [<span className="code-green">"React"</span>, <span className="code-green">"Node.js"</span>],</p><p>  focus: <span className="code-green">"Build with purpose"</span></p><p>{'};'}</p><br /><p><span className="code-purple">await</span> developer.<span className="code-green">build</span>(nextIdea);</p></div>
              <div className="terminal-status"><span><i /> Listo para crear</span><span>TypeScript</span></div>
            </div>
            <div className="visual-caption"><span>CREATIVE MIND. DEVELOPER DNA.</span><span>〈/〉</span></div>
          </div>
        </section>
        <section className="stack-section" id="stack" aria-labelledby="stack-title"><h2 id="stack-title">HERRAMIENTAS<br /><span>DE TODOS LOS DÍAS</span></h2><div className="chip-row">{skills.map(skill => <span className="chip" key={skill}>{skill}</span>)}</div></section>
        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading"><div><p className="eyebrow">02 / EXPLORACIONES</p><h2 id="projects-title">Ideas en <span>pantalla.</span></h2></div><p>Una selección de conceptos.<br />Distintos problemas, el mismo cuidado.</p></div>
          <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><ProjectPreview type={project.type} /><div className="project-body"><div className="project-meta"><span>0{index + 1} / {project.category}</span><span>CONCEPTO</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
        </section>
        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div><p className="eyebrow">03 / CONECTEMOS</p><h2 id="contact-title">¿Tenés una idea?<br /><span>Hagámosla realidad.</span></h2><p>Un proyecto, una colaboración o simplemente un hola.</p><a className="contact-link" href="mailto:andres.meier@gmail.com">andres.meier@gmail.com <span>↗</span></a></div><a className="contact-arrow" href="mailto:andres.meier@gmail.com" aria-label="Escribirle a Andres por email">↗</a></section>
      </main>
      <footer className="site-footer"><a className="brand" href="#top">am<span>.</span></a><p>© {new Date().getFullYear()} Andres Meier</p><a href="#top">Volver arriba ↑</a></footer>
    </div>
  );
}
export default App;
