import Container from '../components/Container/Container'
import '../styles/engineering.css'

function Engineering() {
  return (
    <section className="engineering" id="engineering">
      <Container>
        <p className="engineering__label">What I’m Building</p>

        <div className="engineering__intro">
          <h2>Software that gets better every day.</h2>

          <p>
            I’ve spent the past six years building, maintaining, and improving
            production software at Ookla — from public-facing products to
            internal tools.
          </p>
        </div>

        <article className="engineering__featured">
          <div>
            <p className="engineering__kicker">Current focus</p>
            <h3>Speedtest Insights</h3>
          </div>

          <div className="engineering__body">
            <p>
              I build features, maintain the product, squash bugs, refactor
              continuously, and improve one of Ookla’s flagship products every
              day.
            </p>

            <p>
              Testing is part of the development process. I write unit tests,
              reproduce and resolve issues, validate changes, and work closely
              with QA and product to keep what we ship reliable.
            </p>

            <p>
              I also use AI-assisted development, particularly Claude, to move
              faster through implementation, debugging, refactoring, and
              problem-solving without compromising code quality or
              maintainability.
            </p>

            <div className="engineering__tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Testing</span>
              <span>Refactoring</span>
              <span>QA</span>
            </div>
          </div>
        </article>

        <div className="engineering__grid">
          <article className="engineering__card">
            <p className="engineering__kicker">Greenfield full stack</p>
            <h3>Connectivity Index</h3>
            <p>
              Designed and built from scratch as a new connectivity-ranking
              experience intended to succeed Global Index.
            </p>

            <div className="engineering__tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Vite</span>
            </div>
          </article>

          <article className="engineering__card">
            <p className="engineering__kicker">Public web</p>
            <h3>Ookla.com</h3>
            <p>
              Contributed to transforming Ookla’s public-facing website into a
              headless architecture with WordPress integration.
            </p>
          </article>

          <article className="engineering__card">
            <p className="engineering__kicker">Internal tooling</p>
            <h3>QA Admin</h3>
            <p>
              Built and maintained internal tools spanning front-end work and
              Python/Django backend systems.
            </p>

            <div className="engineering__tags">
              <span>Python</span>
              <span>Django</span>
              <span>Internal tooling</span>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}

export default Engineering