import Container from '../components/Container/Container'

function Music() {
  return (
    <>
      <section className="music" id="music">
        <Container>
          <p className="music__label">Music Technology</p>

          <div className="music__intro">
            <h2>Technology has always been part of the music.</h2>

            <p>
              Before becoming a software engineer, I built a professional career
              as a guitarist, recording artist, composer, and audio engineer.
              That work continues today alongside engineering.
            </p>
          </div>

          <div className="music__grid">
            <article className="music__card">
              <p className="music__kicker">Artist / Endorser</p>
              <h3>Neural DSP</h3>
              <p>
                Longstanding artist relationship with Neural DSP, including
                product demonstration content and professional use of Quad Cortex,
                CorOS, and Neural DSP plugins.
              </p>
            </article>

            <article className="music__card">
              <p className="music__kicker">Current recording project</p>
              <h3>APOLLÆON</h3>
              <p>
                Guitarist, composer, and recording artist for APOLLÆON, recently
                signed to Swedish metal label Black Lion Records.
              </p>
            </article>

            <article className="music__card">
              <p className="music__kicker">Professional career</p>
              <h3>Recording & Touring</h3>
              <p>
                More than two decades of professional recording and touring, including work
                with Himsa, God Forbid, Warrel Dane, and Ghost Ship Octavius.
              </p>
            </article>
          </div>
        </Container>
      </section>
    
      <div className="music__feature">
        <div className="music__feature-copy">
            <h2>Technology has always been part of the music.</h2>

            <p>
            Before becoming a software engineer, I built a professional career as a
            guitarist, recording artist, composer, and audio engineer. That work
            continues today alongside engineering.
            </p>
        </div>

        <div className="music__image-wrap">
            <img
            src="/images/matthew-live.jpg"
            alt="Matthew Wicklund performing live"
            className="music__image"
            />
        </div>
      </div>
    </>

  )
}

export default Music
