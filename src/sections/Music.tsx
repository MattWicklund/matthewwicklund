import Container from '../components/Container/Container'
import '../styles/music.css'

type Release = {
  artist: string
  title: string
  credit: string
  artwork?: string
  url?: string
}

type Video = {
  artist: string
  title: string
  context: string
  url: string
  thumbnail?: string
  featured?: boolean
}

const releases: Release[] = [
  {
    artist: 'Himsa',
    title: 'Hail Horror',
    credit: 'Guitar · Songwriting · Composition',
    artwork: '/images/discography/Himsa-Hail-Horror-Cover.jpg',
    url: 'https://open.spotify.com/album/4NmbmW427AAbNsImegd2Nw',
  },
  {
    artist: 'Warrel Dane',
    title: 'Praises to the War Machine',
    credit: 'Guitar · Songwriting · Composition',
    artwork:
      '/images/discography/Warrel-Dane-Praises-to-the-War-Machine-Cover.jpg',
    url: 'https://open.spotify.com/album/1GInCtYNFPydxDCuW00VNp',
  },
  {
    artist: 'God Forbid',
    title: 'Equilibrium',
    credit: 'Guitar · Songwriting · Composition',
    artwork: '/images/discography/God-Forbid-Equilibrium-Cover.jpg',
    url: 'https://open.spotify.com/album/7aAxqSYwQq2hPrN2qhi3Qx',
  },
  {
    artist: 'Ghost Ship Octavius',
    title: 'Ghost Ship Octavius',
    credit: 'Guitar · Songwriting · Composition · Production',
    artwork: '/images/discography/Ghost-Ship-Octavius-ST-Cover.jpg',
    url: 'https://open.spotify.com/album/5NYfUobQdZipS3uIjB9uSi',
  },
  {
    artist: 'Ghost Ship Octavius',
    title: 'Delirium',
    credit: 'Guitar · Songwriting · Composition · Production',
    artwork: '/images/discography/Ghost-Ship-Octavius-Delirium-Cover.jpeg',
    url: 'https://open.spotify.com/album/5YLlBZ8dHD7URKCaNNE4Uw',
  },
]

const videos: Video[] = [
  {
    artist: 'Neural DSP',
    title: 'Fortin Nameless Suite',
    context: 'Guitar performance & tone demonstration in Pro Tools',
    url: 'https://www.facebook.com/mattwicklundguitar/posts/pfbid035FmjA1EYQFFiubAbmq18ajk5iwFrgjDhd1zbGo3VHTopyeRkH5e5Xmz8ymsZCbLql',
    thumbnail: '/images/neuraldsp-fortin-nameless-thumbnail.png',
    featured: true,
    },
  {
    artist: 'God Forbid',
    title: 'Equilibrium',
    context: 'Official Music Video · Guitar · Songwriting · Composition',
    url: 'https://www.youtube.com/watch?v=2-Ptou_8FYk',
    thumbnail: 'https://i.ytimg.com/vi/2-Ptou_8FYk/maxresdefault.jpg',
    },
  {
    artist: 'Ghost Ship Octavius',
    title: 'Edge of Time',
    context: 'Official Music Video · Guitar · Songwriting · Composition',
    url: 'https://www.youtube.com/watch?v=YrQf711aOFk',
    thumbnail: 'https://i.ytimg.com/vi/YrQf711aOFk/maxresdefault.jpg',
  },
]

function ReleaseArtwork({ release }: { release: Release }) {
  if (release.artwork) {
    return (
      <img
        src={release.artwork}
        alt={`${release.artist} — ${release.title} album cover`}
        className="music__release-image"
        loading="lazy"
      />
    )
  }

  return (
    <div className="music__release-placeholder" aria-hidden="true">
      <span>{release.artist}</span>
      <strong>{release.title}</strong>
    </div>
  )
}

function VideoArtwork({ video }: { video: Video }) {
  if (video.thumbnail) {
    return (
      <img
        src={video.thumbnail}
        alt=""
        className="music__video-image"
        loading="lazy"
      />
    )
  }

  return (
    <div className="music__video-placeholder" aria-hidden="true">
      <span>{video.artist}</span>
      <strong>{video.title}</strong>
    </div>
  )
}

function Music() {
  const featuredVideo = videos.find((video) => video.featured)
  const selectedVideos = videos.filter((video) => !video.featured)

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
              Longstanding artist and endorser relationship with Neural DSP,
              including product demonstration content and professional use of
              Quad Cortex, CorOS, and Neural DSP plugins.
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
              Artist Relations representative for Caparison Guitars from
              2012–2016, alongside a longstanding professional relationship
              with the brand as a performing and recording artist.
            </p>
          </article>

          <article className="music__card">
            <p className="music__kicker">Current Recording Project</p>
            <h3>APOLLÆON</h3>
            <p>
              Guitarist, composer, and recording artist for APOLLÆON, currently
              signed to Swedish metal label Black Lion Records.
            </p>
          </article>

          <article className="music__card">
            <p className="music__kicker">Career Highlights</p>
            <h3>Recording & Touring</h3>
            <p>
              More than two decades of professional recording and touring,
              including work with Himsa, God Forbid, Warrel Dane, and Ghost
              Ship Octavius.
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

        <div className="music__archive">
          <div className="music__archive-heading">
            <p className="music__label">Selected Discography</p>
            <h3>Records</h3>
          </div>

          <div className="music__release-grid">
            {releases.map((release) => {
              const content = (
                <>
                  <div className="music__release-artwork">
                    <ReleaseArtwork release={release} />
                  </div>
                  <div className="music__release-copy">
                    <p className="music__release-artist">{release.artist}</p>
                    <h4>{release.title}</h4>
                    <p>{release.credit}</p>
                  </div>
                </>
              )

              return release.url ? (
                <a
                  key={`${release.artist}-${release.title}`}
                  href={release.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="music__release-card music__release-card--linked"
                >
                  {content}
                </a>
              ) : (
                <article
                  key={`${release.artist}-${release.title}`}
                  className="music__release-card"
                >
                  {content}
                </article>
              )
            })}
          </div>
        </div>

        <div className="music__archive">
          <div className="music__archive-heading">
            <p className="music__label">Selected Videos</p>
            <h3>Performance & Film</h3>
          </div>

          {featuredVideo && (
            <a
              href={featuredVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="music__featured-video"
            >
              <div className="music__featured-video-media">
                <VideoArtwork video={featuredVideo} />
                <span className="music__play" aria-hidden="true">▶</span>
              </div>
              <div className="music__featured-video-copy">
                <p className="music__kicker">Featured · Neural DSP · Pro Tools</p>
                <h4>{featuredVideo.title}</h4>
                <p>{featuredVideo.context}</p>
                <span className="music__watch-link">Watch performance ↗</span>
              </div>
            </a>
          )}

          <div className="music__video-grid">
            {selectedVideos.map((video) => (
              <a
                key={`${video.artist}-${video.title}`}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="music__video-card"
              >
                <div className="music__video-media">
                  <VideoArtwork video={video} />
                  <span className="music__play" aria-hidden="true">▶</span>
                </div>
                <div className="music__video-copy">
                  <p className="music__kicker">{video.artist}</p>
                  <h4>{video.title}</h4>
                  <p>{video.context}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Music
