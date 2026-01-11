import { Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    { title: "NextGen Shopping Hub", tech: ["MERN", "Azure", "CI/CD"], count: "01" },
    { title: "Trippy Experience", tech: ["React", "Tailwind", "Motion"], count: "02" },
    { title: "Facial Security AI", tech: ["Python", "Flask", "AWS"], count: "03" },
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-6xl font-bold text-white tracking-tighter leading-none">CRAFTED<br/><span className="text-[#E67E22]">CODE.</span></h2>
          <a href="https://github.com/manavmodii" className="text-gray-500 hover:text-white flex items-center gap-2 font-bold transition-all underline underline-offset-8">VIEW ALL PROJECTS</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative bg-[#121212] p-8 rounded-3xl border border-white/5 overflow-hidden hover:-translate-y-2 transition-all">
              <span className="absolute -right-4 -top-8 text-9xl font-black text-white/[0.02] group-hover:text-[#E67E22]/5 transition-colors">{p.count}</span>
              <h3 className="text-2xl font-bold text-white mb-4 z-10 relative">{p.title}</h3>
              <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                {p.tech.map(t => <span key={t} className="text-[10px] font-black tracking-widest uppercase bg-white/5 text-gray-400 px-3 py-1 rounded-full">{t}</span>)}
              </div>
              <div className="flex gap-4 relative z-10">
                <button className="p-3 bg-[#E67E22] text-white rounded-xl hover:scale-110 transition-transform"><ArrowUpRight size={20}/></button>
                <button className="p-3 bg-white/5 text-gray-400 rounded-xl hover:text-white transition-colors"><Github size={20}/></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;