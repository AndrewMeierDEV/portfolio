export default function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">03 / CONECTEMOS</p>
        <h2 id="contact-title">¿Tenés una idea?<br />
          <span>Hagámosla realidad.</span>
        </h2>
        <p>Un proyecto, una colaboración o simplemente un hola.</p>
        <a className="contact-link" href="mailto:andrewmeier.dev@gmail.com">andrewmeier.dev@gmail.com <span>↗</span>
        </a>
      </div>
      <a className="contact-arrow" href="mailto:andrewmeier.dev@gmail.com" aria-label="Escribirle a Andres por email">↗</a>
    </section>
  );
}
