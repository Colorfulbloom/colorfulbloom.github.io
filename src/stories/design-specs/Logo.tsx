import React from 'react';

export interface LogoProps {
  /** Width of the logo */
  width?: number;
  /** Height of the logo */
  height?: number;
}

export const Logo = ({ width = 200, height = 70 }: LogoProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 35"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* PHP Open/Close Tags as Architectural Brackets */}
    <path d="M25 2.5 L15 17.5 L25 32.5" fill="none" stroke="#0070BD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M75 2.5 L85 17.5 L75 32.5" fill="none" stroke="#0070BD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* The Variable Signature: $JC */}
    <g transform="translate(32, 25.5)">
      {/* $ Symbol (Minimalist PHP Variable) */}
      <text x="0" y="0" fontFamily="monospace" fontWeight="normal" fontSize="22" fill="#0070BD">$</text>
      {/* Initials JC */}
      <text x="14" y="0" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="26" fill="#E2E2E2">jc</text>
    </g>

    {/* Bottom Line (Structural Foundation) */}
    <rect x="35" y="33" width="30" height="1.5" fill="#333" />
  </svg>
);
