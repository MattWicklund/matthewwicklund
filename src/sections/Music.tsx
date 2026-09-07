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
            <img
              src="/images/spotify-logo-green.png"
              alt="Spotify"
              className="music__spotify-logo"
              loading="lazy"
            />
            <ul className="music__spotify-links">
              <li>
                <a
                  href="https://open.spotify.com/artist/7E1Soj4kGw9zyhIJWZyOhx?si=edc0c7c4d04244c0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="music__link"
                >
                  Ghost Ship Octavius on Spotify <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/1qrGnVZhEO4vX3ahn4RY1r?si=9QRZwJI5Rni_WtpJMYLWNQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="music__link"
                >
                  Warrel Dane on Spotify <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/2OgQ0tvf2ldbdlm8sXyx3M?si=jyYsetf8RZesqduUIonujA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="music__link"
                >
                  God Forbid on Spotify <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/3eYUm924tyABe11T1wxrPp?si=10cf0614141949cb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="music__link"
                >
                  Himsa on Spotify <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </article>
        </div>
      </Container>
    </section>
  )
}

export default Music
