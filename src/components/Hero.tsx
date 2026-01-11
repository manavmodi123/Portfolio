import { ArrowRight, ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const roles = ["Software Developer", "Data Scientist", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDelay = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center section-padding pt-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Top label */}
          <div className="animate-fade-in-up mb-8">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">
              Software Developer & Data Scientist
            </span>
          </div>

          {/* Main heading */}
          <div className="space-y-4 animate-fade-in-up mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9]">
              <span className="text-muted-foreground">HELLO,</span>
              <br />
              <span className="text-foreground">I'M </span>
              <span className="gradient-text">MANAV</span>
            </h1>
            <div className="h-10 md:h-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                I'm a{" "}
                <span className="text-primary font-semibold">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl animate-fade-in-up mb-10" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I build <span className="text-foreground font-medium">scalable software</span> and{" "}
              <span className="text-foreground font-medium">intelligent data solutions</span>. 
              With a strong background in Python, C++, and React.js, I turn complex problems 
              into elegant, efficient code.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up mb-12" style={{ animationDelay: "0.3s" }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all hover:gap-3 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 rounded-full font-semibold text-primary hover:bg-primary/10 transition-colors"
            >
              <FileText size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-muted-foreground text-sm">Find me on</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/manavmodii"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
              >
                <Github size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/manavmodi123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
              >
                <Linkedin size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:modimanav999@gmail.com"
                className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
              >
                <Mail size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="text-primary" />
        </div>

        {/* Stats - positioned on the right for larger screens */}
        <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-8">
          {[
            { value: "1", label: "Year Exp" },
            { value: "10+", label: "Projects" },
            { value: "4+", label: "Certs" },
          ].map((stat, index) => (
            <div key={index} className="text-right">
              <h3 className="text-3xl font-heading font-bold gradient-text">{stat.value}</h3>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Stats */}
      <div className="lg:hidden container-custom mt-16">
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "1", label: "Year Experience" },
            { value: "10+", label: "Projects" },
            { value: "4+", label: "Certifications" },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-4 text-center">
              <h3 className="text-2xl font-heading font-bold gradient-text">{stat.value}</h3>
              <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;