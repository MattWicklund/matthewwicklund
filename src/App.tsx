import Hero from './sections/Hero'
import About from './sections/About'
import Engineering from './sections/Engineering'
import Music from './sections/Music'
import Contact from './sections/Contact'

import './styles/hero.css'
import './styles/about.css'
import './styles/engineering.css'
import './styles/music.css'
import './styles/contact.css'

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Engineering />
      <Music />
      <Contact />
    </main>
  )
}

export default App
