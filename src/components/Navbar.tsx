import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Experience", "Projects", "Services", "Contact"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "py-4" : "py-10"}`}>
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between px-8 h-16 rounded-full transition-all border border-white/5 ${scrolled ? "bg-black/60 backdrop-blur-xl" : "bg-transparent"}`}>
          <a href="#home" className="text-xl font-bold tracking-tighter uppercase">
            Manav <span className="text-[#E67E22]">Modi</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400 hover:text-white transition-colors">
                {item}
              </a>
            ))}
            
            {/* Updated Button: Resume Link */}
            <a 
              href="https://drive.google.com/file/d/1adJPy__9kiGANfOJEq6g1K5bUTy5Ed8W/view?usp=sharing" // Replace with your actual file path in the public folder
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-[#E67E22] text-white rounded-full text-xs font-bold hover:scale-105 hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-[#E67E22]/20"
            >
              RESUME <Download size={14} />
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;