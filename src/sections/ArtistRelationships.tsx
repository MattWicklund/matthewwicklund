import Container from '../components/Container/Container'
import '../styles/artist-relationships.css'

type Brand = {
  name: string
  logo?: string
  url?: string
}

const relationships: Brand[] = [
  {
    name: 'Neural DSP',
    url: 'https://neuraldsp.com/artists/matthew-wicklund',
  },
  { name: 'Stringjoy' },
]

const instruments: Brand[] = [
  { name: 'Strandberg' },
  { name: 'ESP' },
  { name: 'Caparison' },
  { name: 'Gibson' },
]

function BrandName({ brand }: { brand: Brand }) {
  return (
    <>
      {brand.logo && (
        <img
          src={brand.logo}
          alt=""
          className="artist-relationships__logo"
          loading="lazy"
        />
      )}
      <span>{brand.name}</span>
    </>
  )
}

function ArtistRelationships() {
  return (
    <section
      className="artist-relationships"
      id="artist-relationships"
      aria-labelledby="artist-relationships-title"
    >
      <Container>
        <h2 id="artist-relationships-title">Artist Relationships &amp; Gear</h2>
        <p className="artist-relationships__intro">
          I’ve always preferred to support companies whose products I actually
          use. My official artist relationships currently include Neural DSP and
          Stringjoy. My guitars are chosen purely by what works for the music,
          and currently include instruments from Strandberg, ESP, Caparison and
          Gibson.
        </p>

        <div className="artist-relationships__official">
          <h3>Official Artist Relationships</h3>
          <div className="artist-relationships__grid">
            {relationships.map((brand) => (
              <article className="artist-relationships__card" key={brand.name}>
                <h4><BrandName brand={brand} /></h4>
                <p>Artist / Endorser</p>
                {brand.url && (
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="artist-relationships__link"
                  >
                    View official artist profile <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="artist-relationships__instruments">
          <h3>Instruments I Play</h3>
          <ul>
            {instruments.map((brand) => (
              <li key={brand.name}><BrandName brand={brand} /></li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default ArtistRelationships
