import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "NextGen Online Shopping Hub",
      description:
        "A scalable MERN stack e-commerce platform with JWT authentication, CI/CD pipelines reducing deployment time by 30%, and feature-flag-based releases.",
      tech: ["React", "Tailwind", "Express", "Node.js", "MongoDB", "Azure"],
      image: "shopping",
      github: "https://github.com/manavmodii",
      featured: true,
    },
    {
      title: "Trippy: Travel Experience",
      description:
        "Fully responsive travel platform improving mobile engagement by 15-20%. Built with reusable React components, hooks, and smooth navigation.",
      tech: ["React", "Tailwind CSS", "React Router"],
      image: "travel",
      github: "https://github.com/manavmodii",
      featured: true,
    },
    {
      title: "Facial Recognition Security System",
      description:
        "AI-powered facial recognition with GAN-based obfuscation achieving 90% real-time authentication accuracy. Features encrypted storage and secure auth flows.",
      tech: ["Flask", "Vue.js", "Azure", "AWS EC2", "AI/ML"],
      image: "security",
      github: "https://github.com/manavmodii",
      featured: true,
    },
  ];

  const getProjectGradient = (image: string) => {
    switch (image) {
      case "shopping":
        return "from-primary/20 to-accent/10";
      case "travel":
        return "from-accent/20 to-primary/10";
      case "security":
        return "from-primary/30 to-secondary";
      default:
        return "from-primary/20 to-secondary";
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium">Featured Work</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            Projects I've Built
          </h2>
          <p className="text-muted-foreground mt-4">
            Showcasing my expertise in building scalable, user-centric applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card-hover group overflow-hidden"
            >
              {/* Project Image/Visual */}
              <div className={`h-48 bg-gradient-to-br ${getProjectGradient(project.image)} p-6 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-4xl font-heading font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors">
                  {project.title.split(" ")[0]}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-heading font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex-shrink-0"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-secondary text-xs rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline pt-2"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/manavmodii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            <Github size={20} />
            View All Projects
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
