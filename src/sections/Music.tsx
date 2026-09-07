import Container from '../components/Container/Container'
import '../styles/music.css'

function Music() {
  return (
    <section className="music" id="music">
      <Container>
        <div className="music__feature">
          <div className="music__feature-copy">
            <p className="music__label">Music Technology</p>

            <h2>Technology has always been part of the music.</h2>

            <p>
              Long before becoming a software engineer, I built a professional
              career as a guitarist, recording artist, composer, and audio
              engineer. That work continues today alongside engineering.
            </p>
          </div>

          <div className="music__image-wrap">
            <img
              src="/images/Matt_GSO_Live_Jackson.jpeg"
              alt="Matthew Wicklund performing live"
              className="music__image"
            />
          </div>
        </div>

        <div className="music__grid">
          <article className="music__card">
            <p className="music__kicker">Music Technology</p>
            <h3>Official Neural DSP Artist</h3>
            <p>
              Longstanding artist and endorser relationship with Neural DSP, including
              product demonstration content and professional use of Quad Cortex, CorOS,
              and Neural DSP plugins.
            </p>
            <a
              href="https://neuraldsp.com/artists/matthew-wicklund"
              target="_blank"
              rel="noopener noreferrer"
              className="music__link"
            >
              View Official Artist Profile →
            </a>
          </article>

          <article className="music__card">
            <p className="music__kicker">Artist Relations</p>
            <h3>Caparison Guitars</h3>
            <p>
              Artist Relations representative for Caparison Guitars from 2012–2016,
              alongside a longstanding professional relationship with the brand as a
              performing and recording artist.
            </p>
          </article>

          <article className="music__card">
            <p className="music__kicker">Current Recording Project</p>
            <h3>APOLLÆON</h3>
            <p>
              Guitarist, composer, and recording artist for APOLLÆON, currently signed
              to Swedish metal label Black Lion Records.
            </p>
          </article>

          <article className="music__card">
            <p className="music__kicker">Career Highlights</p>
            <h3>Recording & Touring</h3>
            <p>
              More than two decades of professional recording and touring, including
              work with Himsa, God Forbid, Warrel Dane, and Ghost Ship Octavius.
            </p>
          </article>
        </div>
      </Container>
    </section>
  )
}

export default Music
