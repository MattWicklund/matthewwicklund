import Container from '../components/Container/Container'

function MusicTransition() {
  return (
    <section className="music-transition" aria-label="Live performance">
      <Container>
        <div className="music-transition__image-wrap">
          <img
            src="/images/GSOMattGermany1.jpg"
            alt="Matthew Wicklund performing live on guitar"
            className="music-transition__image"
          />
        </div>
      </Container>
    </section>
  )
}

export default MusicTransition
