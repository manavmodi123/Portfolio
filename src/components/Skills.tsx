import { Code2, Layout, Server, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C++", "Python", "Java", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: ["React.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Flask", "REST APIs", "Microservices", "Express.js"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS (EC2, S3)", "Azure", "CI/CD", "Docker"],
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Vercel", "VS Code", "IntelliJ", "Linux"],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium">My Skills</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground mt-4">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card-hover p-6 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-heading font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-secondary text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
