import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 200 200" {...props}>
      <defs>
        <linearGradient id="holographicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="50%" stopColor="#9D4EDD" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00CED1" />
          <stop offset="50%" stopColor="#8A2BE2" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
      </defs>
      {/* Outer circle with gradient */}
      <circle cx="100" cy="100" r="98" fill="url(#holographicGradient)" opacity="0.9" />
      <circle cx="100" cy="100" r="90" fill="#0a0a0a" />

      {/* Hexagon */}
      <path
        d="M100 30 L140 55 L140 105 L100 130 L60 105 L60 55 Z"
        fill="url(#hexGradient)"
        stroke="url(#holographicGradient)"
        strokeWidth="3"
      />

      {/* Inner hexagon */}
      <path d="M100 40 L130 60 L130 100 L100 120 L70 100 L70 60 Z" fill="#0a0a0a" />

      {/* VS Text */}
      <text
        x="100"
        y="95"
        fontFamily="Arial, sans-serif"
        fontSize="42"
        fontWeight="bold"
        fill="url(#holographicGradient)"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        VS
      </text>
    </Svg>
  );
};

export default Icon;
