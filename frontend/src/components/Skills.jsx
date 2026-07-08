
function Skills() {
  const skills = [
    "Java",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
  ];

  return (
    <section id="skills">
      <h2>Technical Skills</h2>

      <div className="grid">
      {skills.map(skill => (
      <div className="card" key={skill}>
      <h3>{skill}</h3>
    </div>
  ))}
</div>
    </section>
  );
}

export default Skills;