export default function Skills() {
  const skills = [
    { name: "Java", icon: "☕" },
    { name: "Go", icon: "🐹" },
    { name: "C#", icon: "🎯" },
    { name: "Spring Boot", icon: "🌱" },
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "HTML & CSS", icon: "🎨" },
    { name: "MySQL", icon: "🛢️" },
    { name: "Git & GitHub", icon: "🐙" },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
