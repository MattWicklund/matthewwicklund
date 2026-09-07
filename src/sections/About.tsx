function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <p className="about__label">About</p>

        <div className="about__grid">
          <h2 className="about__title">
            Engineering software.
            <br />
            Creating music.
          </h2>

          <div className="about__copy">
            <p>
              I’m a software engineer with more than six years of professional
              experience building and improving production applications at Ookla.
            </p>

            <p>
              Alongside engineering, I’ve spent more than two decades working
              professionally as a guitarist, recording artist, composer, and audio
              engineer.
            </p>

            <p>
              I approach both disciplines the same way: attention to detail,
              constant iteration, curiosity, and a focus on making the end result
              better every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
