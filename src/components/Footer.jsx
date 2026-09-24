export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand" href="#top">am<span>.</span>
      </a>
      <p>© {new Date().getFullYear()} Andres Meier</p>
      <a href="#top">Volver arriba ↑</a>
    </footer>
  );
}
