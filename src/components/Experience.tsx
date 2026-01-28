import React from "react";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Relic Fresh Limited",
      period: "November 2025 – Present",
      location: "Remote",
      achievements: [
        "Assisted in developing and maintaining backend services and data pipelines, contributing to a 20% improvement in processing efficiency and faster data availability for internal analytics.",
        "Worked with senior developers to implement small-scale automation and workflow improvements, reducing repetitive manual tasks by approximately 15%.",
        "Supported the deployment and monitoring of Azure-based services using existing CI/CD pipelines, helping improve system stability and scalability."
      ]
    },
    {
      title: "Software Developer",
      company: "Veeha Travels",
      period: "December 2022 – May 2024",
      location: "Remote",
      achievements: [
        "Developed and maintained backend REST APIs to support features such as 1-on-1 travel consultations and custom itineraries, improving platform reliability and reducing system errors by 15%.",
        "Debugged and resolved integration issues between front-end components, booking workflows, and payment services, reducing production incidents by 20%.",
        "Built technical documentation for internal processes and developer onboarding, improving ramp-up speed for new engineers by 25%.",
        "Delivered new features following Agile sprints, achieving 100% on-time sprint completion and enhancing overall platform functionality."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#E67E22] font-black tracking-[0.3em] text-xs uppercase mb-4">Professional Path</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter italic">EXPERIENCE.</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="group relative bg-[#121212] p-8 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-[#E67E22]/30 transition-all duration-500">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#E67E22] transition-colors uppercase tracking-tight">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-3 text-gray-500 mt-1 uppercase tracking-widest text-[10px] font-bold">
                    <span className="text-zinc-400">{exp.title}</span>
                    <span className="w-1 h-1 bg-gray-700 rounded-full" />
                    <span className="flex items-center gap-1"><MapPin size={10}/> {exp.location}</span>
                  </div>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-gray-400 text-xs font-mono flex items-center gap-2 italic">
                  <Calendar size={12} className="text-[#E67E22]"/> {exp.period}
                </div>
              </div>
              <ul className="grid md:grid-cols-1 gap-4">
                {exp.achievements.map((ach, j) => (
                  <li key={j} className="text-gray-400 text-sm flex items-start gap-3 leading-relaxed">
                    <span className="text-[#E67E22] mt-0.5">•</span>
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