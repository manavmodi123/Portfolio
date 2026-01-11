import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Inner Solid Core */}
        <div 
          className={`bg-[#E67E22] rounded-full transition-all duration-300 ease-in-out ${
            isHovering ? "w-0 h-0 opacity-0" : "w-3 h-3 opacity-100 shadow-[0_0_10px_#E67E22]"
          }`} 
        />

        {/* Outer Orbital Ring */}
        <div
          className={`absolute border border-[#E67E22] rounded-full transition-all duration-500 ease-out ${
            isHovering 
              ? "w-16 h-16 border-2 opacity-100 bg-[#E67E22]/5" 
              : "w-8 h-8 border-1 opacity-30"
          }`}
        />

        {/* Small Trailing Ornament (Top Right) */}
        <div 
          className={`absolute w-1.5 h-1.5 bg-[#E67E22] rounded-full transition-all duration-700 delay-75 ${
            isHovering ? "translate-x-8 -translate-y-8 opacity-100" : "translate-x-4 -translate-y-4 opacity-0"
          }`} 
        />
      </div>
    </div>
  );
};

export default CustomCursor;