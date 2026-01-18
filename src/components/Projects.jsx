export default function Projects() {
  const projects = [
    {
      title: "Life Mirror",
      desc: "Personal productivity and reflection system using C#.",
      github: "https://github.com/Lavanya-123770/CS-_-LifeMirror",
    },
    {
      title: "CuraMeds",
      desc: "Healthcare app for medicine tracking and expiry alerts.",
      github: "https://github.com/your-username/curameds",
    },
    {
      title: "COTS Selection Assistant",
      desc: "GenAI-based industrial COTS selection system.",
      github: "https://github.com/your-username/cots",
    },
    {
      title: "Go Ticket Management",
      desc: "Backend ticket management system using Go.",
      github: "https://github.com/Lavanya-123770/Go-project",
    },
    {
      title: "Super Over Game",
      desc: "Cricket Super Over game with scoring logic.",
      demo: "https://lavanya-123770.github.io/Super-Over/",
    },
    {
      title: "Shape Generator",
      desc: "Interactive app to generate geometric shapes.",
      demo: "https://lavanya-123770.github.io/Shapegenerator/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className="project-card"
            onClick={() => window.open(p.demo || p.github, "_blank")}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span>{p.demo ? "Live Demo →" : "GitHub →"}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
