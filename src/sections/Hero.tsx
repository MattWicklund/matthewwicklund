import Container from '../components/Container/Container'

function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__content">
          <p className="hero__eyebrow">
            Software Engineer · Recording Artist · Music Technology
          </p>

          <h1 className="hero__title">
            Matthew
            <br />
            Wicklund
          </h1>

          <p className="hero__description">
            I build production software and create music professionally,
            bringing engineering, technology, and creative work together.
          </p>
        </div>

        <a className="hero__scroll" href="#about">
          <span>Explore</span>
          <span aria-hidden="true">↓</span>
        </a>
      </Container>
    </section>
  )
}

export default Hero
