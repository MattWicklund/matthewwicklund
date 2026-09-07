import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Engineering from './sections/Engineering'
import MusicTransition from './sections/MusicTransition'
import Music from './sections/Music'
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
        <Contact />
      </main>
    </>
  )
}

export default App
