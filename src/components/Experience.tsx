import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Relic Fresh Limited",
      period: "November 2025 – Present",
      location: "Ireland, Remote",
      achievements: [
        "Developing backend services using Node.js and REST APIs for internal systems.",
        "Integrating GenAI-enabled automation into operational workflows.",
        "Contributing to cloud-native, serverless microservices on Azure."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Putatoe Technologies Pvt. Ltd.",
      period: "December 2022 – May 2024",
      location: "India",
      achievements: [
        "Designed 4 REST APIs improving backend efficiency by 15%.",
        "Built MicroStrategy dashboards and ETL pipelines, reducing manual reporting by 20%.",
        "Led Agile ceremonies including stand-ups and sprint planning."
      ]
    },
    {
      title: "Web Development Intern",
      company: "My Captain",
      period: "November 2020 – February 2021",
      location: "Remote",
      achievements: [
        "Developed frontend and backend features for web applications.",
        "Built responsive UI using HTML, CSS, and JavaScript.",
        "Collaborated in Agile workflows to deliver features on time."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#E67E22] font-black tracking-[0.3em] text-xs uppercase mb-4">Professional Path</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">EXPERIENCE.</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="group relative bg-[#121212] p-8 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-[#E67E22]/30 transition-all duration-500">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#E67E22] transition-colors">{exp.title}</h3>
                  <div className="flex items-center gap-3 text-gray-500 mt-1 uppercase tracking-widest text-[10px] font-bold">
                    <span>{exp.company}</span>
                    <span className="w-1 h-1 bg-gray-700 rounded-full" />
                    <span className="flex items-center gap-1"><MapPin size={10}/> {exp.location}</span>
                  </div>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-gray-400 text-xs font-bold tracking-tighter flex items-center gap-2">
                  <Calendar size={12} className="text-[#E67E22]"/> {exp.period}
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                {exp.achievements.map((ach, j) => (
                  <li key={j} className="text-gray-400 text-sm flex items-start gap-3 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-1.5 flex-shrink-0" />
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;