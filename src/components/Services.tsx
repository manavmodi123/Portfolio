import { Code, Layout, Server, Cloud, GitBranch, MessageSquare, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "01",
      icon: Code,
      title: "Full Stack Development",
      description: "Building end-to-end scalable applications with modern stacks (MERN, Python/Flask).",
      tags: ["React", "Node.js", "Scalability"]
    },
    {
      id: "02",
      icon: Server,
      title: "Backend & API Design",
      description: "Crafting robust RESTful APIs and microservices with high performance and security.",
      tags: ["REST", "Microservices", "Auth"]
    },
    {
      id: "03",
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Deploying and managing infrastructure on AWS and Azure with CI/CD automation.",
      tags: ["AWS", "Azure", "Docker"]
    },
    {
      id: "04",
      icon: Layout,
      title: "Frontend Engineering",
      description: "Creating pixel-perfect, responsive interfaces with a focus on UX and performance.",
      tags: ["Tailwind", "Vue.js", "Motion"]
    },
    {
      id: "05",
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automating deployment workflows to reduce time-to-market and increase stability.",
      tags: ["GitHub Actions", "Azure DevOps"]
    },
    {
      id: "06",
      icon: MessageSquare,
      title: "Technical Consulting",
      description: "Architecture reviews and tech stack guidance to solve complex business problems.",
      tags: ["Consulting", "Architecture"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E67E22]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <p className="text-[#E67E22] font-black tracking-[0.3em] text-xs uppercase mb-4">Capabilities</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">SERVICES.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group relative p-10 bg-[#121212] rounded-[2.5rem] border border-white/5 hover:border-[#E67E22]/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Service Number */}
              <span className="absolute top-8 right-10 text-xs font-black text-gray-700 group-hover:text-[#E67E22] transition-colors duration-500">
                {service.id}
              </span>

              <div className="mb-8 p-4 w-fit bg-white/5 rounded-2xl group-hover:bg-[#E67E22]/10 transition-colors">
                <service.icon className="text-gray-400 group-hover:text-[#E67E22] transition-colors" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold tracking-widest uppercase text-gray-600 bg-white/[0.03] px-3 py-1 rounded-full group-hover:text-white transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-white group-hover:text-[#E67E22] transition-colors"
              >
                Inquire Now <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;