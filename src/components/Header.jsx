export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Andres Meier, inicio">am<span>.</span>
      </a>
      <nav aria-label="Navegación principal">
        <a href="#projects">Proyectos</a>
        <a href="#stack">Stack</a>
        <a className="nav-contact" href="#contact">Hablemos <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
