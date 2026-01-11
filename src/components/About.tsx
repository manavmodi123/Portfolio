import { GraduationCap, MapPin, Calendar, Zap } from "lucide-react";

const About = () => {
  const education = [
    { degree: "MSc in Computing Science", institution: "University College Cork, Ireland", period: "2024 – 2025" },
    { degree: "B.Tech in Computer Engineering", institution: "K. J. Somaiya College, Mumbai", period: "2020 – 2024" },
  ];

  return (
    <section id="about" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#E67E22] font-black tracking-[0.3em] text-xs uppercase">Background</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-8 leading-tight tracking-tighter">
              DRIVEN BY <span className="text-gray-500">IMPACT.</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>I am a results-oriented developer and an <span className="text-white font-semibold">MSc Computing Science Graduate</span> from UCC.</p>
              <p>My work is defined by <span className="text-[#E67E22]">efficiency</span>, <span className="text-[#E67E22]">scalability</span>, and <span className="text-[#E67E22]">user-centric design</span>.</p>
            </div>
            <div className="flex gap-4 mt-10">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                <Zap className="text-[#E67E22]" /> <span className="text-white font-bold">Fast Learner</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                <MapPin className="text-[#E67E22]" /> <span className="text-white font-bold">Dublin, IE</span>
              </div>
            </div>
          </div>

          <div className="space-y-8 bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-sm">
             <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <GraduationCap className="text-[#E67E22]" /> Education
            </h3>
            {education.map((edu, i) => (
              <div key={i} className="relative pl-6 border-l border-white/10">
                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-[#E67E22]" />
                <h4 className="text-white font-bold text-xl">{edu.degree}</h4>
                <p className="text-[#E67E22] text-sm font-medium mt-1">{edu.institution}</p>
                <p className="text-gray-500 text-sm mt-2 flex items-center gap-2"><Calendar size={14}/> {edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;