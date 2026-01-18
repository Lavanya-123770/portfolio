export default function About() {
  return (
    <section className="about" id="about">
      {/* Intro */}
      <div className="about-intro">
        <h2>About Me</h2>
        <p>
          I am Lavanya, a third-year engineering student (2027 passout) with a
          CGPA of <strong>8.23</strong>. I am passionate about software
          development and enjoy building real-world applications.
        </p>
      </div>

      {/* What I Do */}
      <div className="what-i-do-grid">
        <Card title="Full Stack Development" icon="🧩"
          desc="Building end-to-end applications using React, Java, Spring Boot, Go, and C#." />

        <Card title="Backend & APIs" icon="⚙️"
          desc="Designing REST APIs, handling business logic, and databases." />

        <Card title="Problem Solving" icon="🧠"
          desc="Practicing DSA to improve logic and coding skills." />

        <Card title="Continuous Learning" icon="📚"
          desc="Learning new technologies and building projects consistently." />
      </div>
    </section>
  );
}

function Card({ title, desc, icon }) {
  return (
    <div className="what-i-do-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
