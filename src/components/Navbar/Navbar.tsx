import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand">
          <img
            src="/images/matt-signature-logo.svg"
            alt="Matthew Wicklund"
            className="navbar__logo"
          />
        </a>

        <nav>
          <a href="#engineering">Engineering</a>
          <a href="#music">Music</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
