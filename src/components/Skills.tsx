import { Code2, Layout, Server, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const categories = [
    { title: "Languages", icon: Code2, skills: ["C++", "Python", "Java", "JavaScript", "TypeScript"] },
    { title: "Frontend", icon: Layout, skills: ["React.js", "Vue.js", "Tailwind CSS", "HTML5"] },
    { title: "Backend", icon: Server, skills: ["Node.js", "Flask", "REST APIs", "Express"] },
    { title: "Cloud/DevOps", icon: Cloud, skills: ["AWS", "Azure", "CI/CD", "Docker"] },
    { title: "Databases", icon: Database, skills: ["MongoDB", "MySQL", "PostgreSQL"] },
    { title: "Tools", icon: Wrench, skills: ["Git", "Vercel", "Linux", "VS Code"] }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 tracking-tighter">ARSENAL.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="p-8 bg-[#121212] rounded-[2rem] border border-white/5 hover:border-[#E67E22]/20 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <cat.icon className="text-[#E67E22]" size={24} />
                <h3 className="text-lg font-bold text-white uppercase tracking-widest">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => (
                  <span key={s} className="px-4 py-2 bg-white/5 rounded-xl text-gray-400 text-xs font-bold hover:bg-[#E67E22] hover:text-white transition-all cursor-default">
                    {s}
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