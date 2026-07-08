function Hero() {
  return (
    <section className="hero">
      <img src="/profile.jpg" className="profile" alt="Profile" />

      <h1>VELUTHAI V</h1>

      <h2>Full Stack Developer</h2>

      <p>
        Building scalable web applications using React, Node.js,
        MongoDB and Java technologies.
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/resume.pdf" download>
          <button>Download Resume</button>
        </a>

        <button>Contact Me</button>
      </div>
    </section>
  );
}

export default Hero;