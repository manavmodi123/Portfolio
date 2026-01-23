import React, { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

interface StatItem {
  v: string;
  l: string;
}

const Hero: React.FC = () => {
  const roles: string[] = ["Software Developer", "Full Stack Engineer", "Problem Solver"];
  const [index, setIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentRole = roles[index];
    const typingSpeed = isDeleting ? 40 : 120;
    const pauseTime = 2000;

    const handleTyping = () => {
      if (!isDeleting) {
        setText(currentRole.slice(0, text.length + 1));
        if (text.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentRole.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, roles]);

  const stats: StatItem[] = [
    { v: "2+", l: "YEAR EXP" },
    { v: "10+", l: "PROJECTS" },
    { v: "04+", l: "CERTS" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          
          <div className="lg:col-span-9">
            <h1 className="text-[11vw] md:text-[9rem] font-black tracking-tighter leading-[0.8] mb-10">
              <span className="text-white/10 block uppercase">HELLO,</span>
              <span className="text-white uppercase">I'M </span>
              <span className="text-[#E67E22] uppercase">MANAV</span>
            </h1>
            
            <div className="max-w-2xl">
              <p className="text-2xl md:text-5xl font-light text-white/80 tracking-tight mb-8">
                A <span className="text-[#E67E22] font-bold italic underline decoration-white/10">
                  {text}
                  <span className="animate-pulse ml-1 inline-block bg-[#E67E22] w-1 h-8 md:h-12 align-middle"></span>
                </span>
              </p>
              
              <div className="flex flex-wrap gap-8 items-center pt-4">
                <a href="#projects" className="px-10 py-5 bg-[#E67E22] text-white rounded-full font-black uppercase tracking-widest text-[10px] flex items-center gap-4 hover:bg-white hover:text-black transition-all">
                  VIEW SELECTED WORKS <ArrowRight size={16} />
                </a>
                <div className="flex gap-6 border-l border-white/10 pl-8 text-gray-400">
                  <a href="https://github.com/manavmodi123" target="_blank" rel="noreferrer"><Github className="hover:text-white transition-colors" /></a>
                  <a href="https://linkedin.com/in/manavmodii" target="_blank" rel="noreferrer"><Linkedin className="hover:text-white transition-colors" /></a>
                  <a href="mailto:modimanav999@gmail.com"><Mail className="hover:text-white transition-colors" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 border-l border-white/5 pl-10 hidden lg:flex flex-col gap-16">
            {stats.map((s, i) => (
              <div key={i} className="group">
                <h3 className="text-7xl font-black text-white/20 group-hover:text-[#E67E22] transition-colors">
                  {s.v}
                </h3>
                <p className="text-[10px] font-black tracking-[0.4em] text-gray-400 uppercase mt-2">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;