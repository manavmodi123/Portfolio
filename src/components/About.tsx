import { GraduationCap, MapPin, Calendar, Zap } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "MSc in Data Science",
      institution: "University College Cork, Ireland",
      period: "2024 – 2025",
      current: true,
    },
    {
      degree: "B.Tech in Computer Engineering",
      institution: "K. J. Somaiya College of Engineering, Mumbai",
      period: "2020 – 2024",
      current: false,
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Who Am I?</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 leading-tight">
            <span className="gradient-text">DRIVEN BY IMPACT.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Main content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                I am a results-oriented developer and an{" "}
                <span className="text-primary font-semibold">MSc Data Science Graduate</span> from UCC. 
                I don't just write code; I build solutions that improve business metrics.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My work is defined by <span className="text-foreground">efficiency</span>,{" "}
                <span className="text-foreground">scalability</span>, and{" "}
                <span className="text-foreground">user-centric design</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's optimizing backend queries to shave seconds off load times or designing 
                algorithms that predict user behavior, I love the challenge of making things better. 
                I thrive in Agile environments and am passionate about delivering impactful solutions.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, text: "Fast Learner" },
                { icon: MapPin, text: "Dublin, Ireland" },
              ].map((item, index) => (
                <div key={index} className="glass-card p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <GraduationCap className="text-primary" size={24} />
              </div>
              Education
            </h3>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="glass-card-hover p-6 relative group">
                  {edu.current && (
                    <span className="absolute top-4 right-4 px-3 py-1.5 bg-accent/20 text-accent text-xs rounded-full font-semibold uppercase tracking-wider">
                      Current
                    </span>
                  )}
                  <h4 className="text-lg font-heading font-bold text-foreground">{edu.degree}</h4>
                  <p className="text-muted-foreground mt-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mt-3">
                    <Calendar size={14} className="text-primary" />
                    <span>{edu.period}</span>
                  </div>
                  
                  {/* Hover accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors rounded-l-2xl" />
                </div>
              ))}
            </div>

            {/* Tech stack preview */}
            <div className="glass-card p-6 mt-6">
              <p className="text-sm text-muted-foreground mb-4">Core Technologies</p>
              <div className="flex flex-wrap gap-2">
                {["Python", "React.js", "Node.js", "TypeScript", "AWS", "Azure"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-secondary border border-border rounded-full text-sm text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;