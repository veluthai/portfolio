function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="card">
        <h3>Quiz App</h3>
        <p><strong>Duration:</strong> August 2025</p>
        <p><strong>Location:</strong> Chennai, India</p>

        <ul>
          <li>
            Built a technical quiz platform with programming language
            selection and multi-level difficulty ranging from Beginner
            to Advanced.
          </li>

          <li>
            Implemented real-time scoring, performance analysis,
            and detailed result tracking.
          </li>

          <li>
            Followed clean coding practices and reusable component
            architecture to improve maintainability and scalability.
          </li>

          <li>
            Integrated client-side validation and efficient state
            management for a seamless quiz experience.
          </li>
        </ul>
      </div>

      <br />

      <div className="card">
        <h3>Smart Waste Segregation App</h3>
        <p><strong>Duration:</strong> November 2025</p>
        <p><strong>Location:</strong> Chennai, India</p>

        <ul>
          <li>
            Developed an intelligent waste management platform with
            AI-assisted features and automation capabilities.
          </li>

          <li>
            Implemented AI-generated aptitude and coding assessments
            with automated evaluation using Gemini AI.
          </li>

          <li>
            Built role-based access control for Students, Faculty,
            and Administrators using Firebase Authentication.
          </li>

          <li>
            Integrated Google Calendar API for automatic event
            scheduling, notifications, and reminders.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;