import React, { forwardRef } from "react";
import shipGif from "../../imports/ship.gif";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedShip = forwardRef<HTMLDivElement, Props>(
  ({ className = "", style }, ref) => {
    return (
      <div ref={ref} className={className} style={style}>
        <img
          src={shipGif}
          alt="Starship"
          className="w-full h-full object-contain pointer-events-none"
          draggable={false}
        />
      </div>
    );
  }
);

AnimatedShip.displayName = "AnimatedShip";
