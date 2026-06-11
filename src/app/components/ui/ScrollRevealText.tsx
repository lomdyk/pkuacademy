import React, { useMemo } from "react";

interface Props {
  text: string;
  progress: number;
  accentColor: string;
  className?: string;
}

export const ScrollRevealText: React.FC<Props> = ({ 
  text, 
  progress, 
  accentColor, 
  className = "" 
}) => {
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <p className={`m-0 ${className}`}>
      {words.map((w, i) => {
        const p = i / words.length;
        const diff = progress - p;
        
        let color = "rgba(255,255,255,0.2)"; // Dim background layer
        let textShadow = "none";
        
        // If word is just revealed (within 15% window), it flashes in accent color
        if (diff > 0 && diff < 0.2) {
          color = accentColor;
          textShadow = `0 0 16px ${accentColor}`;
        } 
        // Once scroll moves past the flash window, it cools down to saturated white
        else if (diff >= 0.2) {
          color = "#ffffff";
        }

        return (
          <span 
            key={i} 
            className="inline-block mr-[0.25em]"
            style={{ 
              color, 
              textShadow, 
              transition: "color 0.2s ease-out, text-shadow 0.2s ease-out",
              willChange: "color, text-shadow"
            }}
          >
            {w}
          </span>
        );
      })}
    </p>
  );
};
