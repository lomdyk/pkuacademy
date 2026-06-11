import React, { useMemo, useState, useEffect, useRef } from "react";

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
  const animationName = `flare-${accentColor.replace(/[^a-zA-Z0-9]/g, '')}`;
  const { charsMap, totalLength } = useMemo(() => {
    const words = text.split(" ");
    let totalChars = 0;
    const charsMap = words.map(word => {
      const chars = word.split("");
      const result = chars.map((char) => {
        const globalIndex = totalChars++;
        return { char, globalIndex };
      });
      totalChars++; // Count the space
      return result;
    });
    return { charsMap, totalLength: totalChars };
  }, [text]);

  return (
    <>
      <style>
        {`
          @keyframes ${animationName} {
            0% { 
              color: ${accentColor}; 
              text-shadow: 0 0 16px ${accentColor}; 
            }
            100% { 
              color: #ffffff; 
              text-shadow: none; 
            }
          }
          .reveal-char {
            color: rgba(255,255,255,0.15);
            transition: color 0.1s ease-out; /* fast fade out when scrubbing backwards */
          }
          .reveal-char.revealed {
            color: #ffffff; /* final state */
            animation: ${animationName} 0.8s ease-out forwards;
          }
        `}
      </style>
      <p className={`m-0 ${className}`}>
        {charsMap.map((wordChars, i) => (
          <span key={i} className="inline-block mr-[0.25em] whitespace-nowrap">
            {wordChars.map((item, j) => {
              const p = item.globalIndex / totalLength;
              const isRevealed = progress > p;

              return (
                <span 
                  key={j} 
                  className={`reveal-char ${isRevealed ? 'revealed' : ''}`}
                >
                  {item.char}
                </span>
              );
            })}
          </span>
        ))}
      </p>
    </>
  );
};
