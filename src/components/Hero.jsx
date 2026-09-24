import MatrixRain from "./MatrixRain.jsx";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span /> FULL STACK DEVELOPER</p>
        <h1 id="hero-title">Andres<br />
          <span>Meier<span className="name-dot">.</span>
          </span>
        </h1>
        <p className="hero-lead">De una idea a algo que funciona.</p>
        <p className="hero-text">Desarrollo experiencias web claras, rápidas y útiles. Conecto diseño, frontend y backend para dar vida a productos con atención al detalle.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">Explorar proyectos <span>↗</span>
          </a>
          <a className="btn btn-secondary" href="#contact">Contactame <span>→</span>
          </a>
        </div>
        <div className="hero-footnote">
          <span>01 / PRESENTACIÓN</span>
          <a href="#projects">Seguí explorando ↓</a>
        </div>
      </div>
      <div className="hero-visual">
        <MatrixRain />
        <div className="visual-topline">
          <span>
            <i /> THE CODE BEHIND THE IDEAS</span>
        </div>
        <div className="terminal">
          <div className="terminal-bar">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>developer.ts</span>
            <span>⌘</span>
          </div>
          <div className="terminal-code">
            <p>
              <span className="code-muted">// Convirtiendo ideas en productos</span>
            </p>
            <p>
              <span className="code-purple">const</span> developer = {'{'}</p>
            <p>  name: <span className="code-green">"Andres Meier"</span>,</p>
            <p>  role: <span className="code-green">"Full Stack Developer"</span>,</p>
            <p>  stack: [<span className="code-green">"React"</span>, <span className="code-green">"Node.js"</span>],</p>
            <p>  focus: <span className="code-green">"Build with purpose"</span>
            </p>
            <p>{'};'}</p>
            <br />
            <p>
              <span className="code-purple">await</span> developer.<span className="code-green">build</span>(nextIdea);</p>
          </div>
          <div className="terminal-status">
            <span>
              <i /> Listo para crear</span>
            <span>TypeScript</span>
          </div>
        </div>
        <div className="visual-caption">
          <span>CREATIVE MIND. DEVELOPER DNA.</span>
          <span>〈/〉</span>
        </div>
      </div>
    </section>
  );
}
