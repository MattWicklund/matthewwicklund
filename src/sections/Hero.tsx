import Container from '../components/Container/Container'
import '../styles/hero.css'

function Hero() {
  return (
    <section className="hero" id="top">
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

          <p className="hero__statement">
            Engineering software with a musician&apos;s attention to detail.
          </p>

          <p className="hero__description">
            Six years building production software at Ookla. More than two decades
            creating, recording, and performing music professionally.
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
