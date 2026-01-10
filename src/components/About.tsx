import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "MSc in Computing Science",
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
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl font-heading font-bold gradient-text">MM</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold">Manav Modi</h3>
                    <p className="text-muted-foreground">Full Stack Engineer</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={18} className="text-primary" />
                  <span>Dublin, Ireland</span>
                </div>

                <div className="glass-card p-4 bg-primary/5 border-primary/20">
                  <span className="text-4xl font-heading font-bold gradient-text">3+</span>
                  <p className="text-muted-foreground text-sm mt-1">Years of Development Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium">About Me</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
                Passionate about building
                <br />
                <span className="gradient-text">scalable solutions</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm an ambitious Full Stack Engineer with expertise in React, Node.js, TypeScript, 
              and cloud technologies including AWS and Azure. With a strong foundation in data structures, 
              object-oriented programming, and clean code principles, I thrive in Agile environments 
              and am passionate about delivering impactful solutions.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm a quick learner who adapts well to new technologies like Rails and Go. 
              My experience spans from designing scalable system architectures to implementing 
              CI/CD pipelines that streamline development workflows.
            </p>

            {/* Education Timeline */}
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold flex items-center gap-2">
                <GraduationCap className="text-primary" size={24} />
                Education
              </h3>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="glass-card-hover p-5 relative">
                    {edu.current && (
                      <span className="absolute top-4 right-4 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        Current
                      </span>
                    )}
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
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
