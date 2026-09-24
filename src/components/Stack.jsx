import { skills } from "../data/portfolio.js";

export default function Stack() {
  return (
    <section className="stack-section" id="stack" aria-labelledby="stack-title">
      <h2 id="stack-title">HERRAMIENTAS<br />
        <span>DE TODOS LOS DÍAS</span>
      </h2>
      <div className="chip-row">{skills.map(skill => <span className="chip" key={skill}>{skill}</span>)}</div>
    </section>
  );
}
