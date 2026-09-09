import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Engineering from './sections/Engineering'
import MusicTransition from './sections/MusicTransition'
import Music from './sections/Music'
import ArtistRelationships from './sections/ArtistRelationships'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Engineering />
        <MusicTransition />
        <Music />
        <ArtistRelationships />
        <Contact />
      </main>
    </>
  )
}

export default App
