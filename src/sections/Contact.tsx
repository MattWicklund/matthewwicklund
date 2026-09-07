import Container from '../components/Container/Container'
import '../styles/contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <div className="contact__inner">
          <p className="contact__label">Contact</p>

          <h2>Let’s build something great.</h2>

          <p className="contact__intro">
            I'm always interested in thoughtful software, music technology, and
            products that bring engineering and creativity together.
          </p>

          <div className="contact__links">
            <a href="mailto:mattwicklundlessons@gmail.com">
              Email
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/matthew-wicklund-3a751843/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://github.com/MattWicklund"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://neuraldsp.com/artists/matthew-wicklund"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neural DSP Artist Profile
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
