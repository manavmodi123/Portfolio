import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Hello, I'm{" "}
                <span className="text-gradient-animate">Manav</span>
                <br />
                Full Stack Engineer
                <br />
                Based In <span className="text-primary">Dublin</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Ambitious Full Stack Engineer with expertise in React, Node.js, TypeScript, 
                and cloud technologies. Passionate about building scalable applications 
                and delivering impactful solutions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all hover:gap-3"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/manavmodii"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-4 rounded-xl group"
              >
                <Github size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/manavmodi123"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-4 rounded-xl group"
              >
                <Linkedin size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:modimanav999@gmail.com"
                className="glass-card-hover p-4 rounded-xl group"
              >
                <Mail size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up-delay">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] scale-125 blur-3xl animate-pulse" />
              
              {/* Animated gradient ring */}
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] p-1 bg-gradient-to-br from-primary via-accent to-primary animate-spin-slow">
                  <div className="absolute inset-0 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-gradient-to-br from-primary via-accent to-primary" />
                </div>
                
                {/* Inner container */}
                <div className="absolute inset-1 rounded-[38%_62%_62%_38%/62%_38%_62%_38%] bg-secondary flex items-center justify-center overflow-hidden">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                  
                  {/* Initials with enhanced styling */}
                  <div className="relative z-10">
                    <span className="text-7xl md:text-8xl font-heading font-bold bg-gradient-to-br from-primary via-primary/80 to-accent bg-clip-text text-transparent drop-shadow-2xl">
                      MM
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badges with enhanced styling */}
              <div className="absolute -top-6 right-0 md:-right-6 glass-card px-5 py-2.5 rounded-xl floating border border-primary/20 shadow-lg shadow-primary/10">
                <span className="text-sm font-semibold text-foreground">React</span>
              </div>
              <div className="absolute -bottom-6 left-0 md:-left-6 glass-card px-5 py-2.5 rounded-xl floating border border-accent/20 shadow-lg shadow-accent/10" style={{ animationDelay: "1s" }}>
                <span className="text-sm font-semibold text-foreground">Node.js</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-12 md:-right-16 glass-card px-5 py-2.5 rounded-xl floating border border-primary/20 shadow-lg shadow-primary/10" style={{ animationDelay: "2s" }}>
                <span className="text-sm font-semibold text-foreground">AWS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: "1", label: "Year Experience" },
            { value: "10+", label: "Projects Completed" },
            { value: "2", label: "Internships" },
            { value: "4+", label: "Certifications" },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <h3 className="text-3xl md:text-4xl font-heading font-bold gradient-text">{stat.value}</h3>
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
