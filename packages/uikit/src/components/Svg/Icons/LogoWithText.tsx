import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import { vars } from "../../../css/vars.css";

const Logo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 500 200" {...props}>
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
      {/* Logo circle and hexagon */}
      <circle cx="100" cy="100" r="90" fill="url(#holographicGradient)" opacity="0.9" />
      <circle cx="100" cy="100" r="82" fill="#0a0a0a" />

      {/* Hexagon */}
      <path
        d="M100 35 L135 57.5 L135 102.5 L100 125 L65 102.5 L65 57.5 Z"
        fill="url(#hexGradient)"
        stroke="url(#holographicGradient)"
        strokeWidth="2.5"
      />

      {/* Inner hexagon */}
      <path d="M100 45 L125 62.5 L125 97.5 L100 115 L75 97.5 L75 62.5 Z" fill="#0a0a0a" />

      {/* VS Text in logo */}
      <text
        x="100"
        y="95"
        fontFamily="Arial, sans-serif"
        fontSize="38"
        fontWeight="bold"
        fill="url(#holographicGradient)"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        VS
      </text>

      {/* VortexSwap text */}
      <text
        x="230"
        y="110"
        fontFamily="Arial, sans-serif"
        fontSize="62"
        fontWeight="bold"
        fill={vars.colors.contrast}
        textAnchor="start"
        dominantBaseline="middle"
        letterSpacing="2"
      >
        VortexSwap
      </text>
    </Svg>
  );
};

export default Logo;
