import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-12">LET'S <span className="text-[#E67E22]">SYNC.</span></h2>
        
        <div className="max-w-2xl mx-auto bg-white/5 p-12 rounded-[3rem] border border-white/10">
          <p className="text-2xl text-gray-400 mb-8 font-medium">Have a project in mind or just want to say hi?</p>
          <a href="mailto:modimanav999@gmail.com" className="text-3xl md:text-4xl font-bold text-white hover:text-[#E67E22] transition-colors break-all underline underline-offset-8">
            modimanav999@gmail.com
          </a>
          
          <div className="flex justify-center gap-8 mt-12">
            <a href="https://www.linkedin.com/in/manavmodii/" className="flex items-center gap-2 text-gray-500 hover:text-white font-bold tracking-widest uppercase text-xs">LinkedIn <ArrowUpRight size={14}/></a>
            <a href="https://github.com/manavmodi123" className="flex items-center gap-2 text-gray-500 hover:text-white font-bold tracking-widest uppercase text-xs">GitHub <ArrowUpRight size={14}/></a>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Contact;