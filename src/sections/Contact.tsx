import Container from '../components/Container/Container'

function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <p className="contact__label">Contact</p>

        <h2>Let’s build something.</h2>

        <p className="contact__copy">
          I’m currently based in Sofia, Bulgaria and open to conversations about
          software engineering, music technology, and creative technical work.
        </p>

        <div className="contact__links">
          <a href="mailto:mattwicklundlessons@gmail.com">Email</a>
          <a
            href="https://github.com/MattWicklund"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <p className="contact__footer">
          © {new Date().getFullYear()} Matthew Wicklund
        </p>
      </Container>
    </section>
  )
}

export default Contact
