import { useState, useEffect, useRef } from 'react';

export interface UnderDevelopmentProps {}

/**
 * Under Development page with animated logo sequence:
 * 1. JC pops into existence
 * 2. $ symbol appears at position
 * 3. < > brackets zoom in from left/right with fade
 * 4. Underline draws from left to right
 * 5. Final: Logo moves up 100px
 * 6. Bounce: Logo bounces with stopping effect
 *
 * Matches exact structure from src/stories/design-specs/Logo.tsx
 */
export const UnderDevelopment = ({}: UnderDevelopmentProps) => {
  const [logoSize, setLogoSize] = useState({ width: 200, height: 70 });
  const [startMove, setStartMove] = useState(false);
  const [startBounce, setStartBounce] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveTimeout = setTimeout(() => {
      setStartMove(true);
    }, 1400);

    return () => {
      clearTimeout(moveTimeout);
    };
  }, []);

  // Bounce animation starts when move completes
  useEffect(() => {
    if (!startMove || startBounce) return;

    let startTime: number | null = null;
    let animationFrame: number | null = null;

    const animateBounce = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const duration = 1200;
      const progress = Math.min(elapsed / duration, 1);

      const easeBounceStop = easeBounceStopFn(progress);
      const bounceY = -100 + (100 * easeBounceStop);

      const container = containerRef.current;
      if (container) {
        container.style.transform = `translateY(${bounceY}px)`;
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateBounce);
      }
    };

    animationFrame = requestAnimationFrame(animateBounce);
    setStartBounce(true);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [startMove]);

  return (
    <div className="page-under-development">
      <div className="page-under-development__content">
        <div ref={containerRef} className="page-under-development__logo-container">
          <svg
            className="page-under-development__logo"
            width={logoSize.width}
            height={logoSize.height}
            viewBox="0 0 100 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="page-under-development__bracket page-under-development__bracket--left"
              d="M25 2.5 L15 17.5 L25 32.5"
              fill="none"
              stroke="#0070BD"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="page-under-development__bracket page-under-development__bracket--right"
              d="M75 2.5 L85 17.5 L75 32.5"
              fill="none"
              stroke="#0070BD"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g className="page-under-development__jc-group" transform="translate(32, 25.5)">
              <text
                className="page-under-development__dollar"
                x="0"
                y="0"
                fontFamily="monospace"
                fontWeight="normal"
                fontSize="22"
                fill="#0070BD"
              >$</text>

              <text
                className="page-under-development__jc"
                x="14"
                y="0"
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
                fontSize="26"
                fill="#E2E2E2"
              >jc</text>
            </g>

            <rect
              className="page-under-development__underline"
              x="35"
              y="38"
              width="0"
              height="1.5"
              fill="#333"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

function easeCarSpeedUpFn(t: number): number {
  const t2 = t * t;
  const t3 = 1 - t;
  const t4 = t - 0.2;
  return t2 * t3;
}

function easeBounceStopFn(t: number): number {
  if (t < 0.2) {
    const t2 = t * t;
    return 8 * t2;
  } else if (t < 0.5) {
    const t4 = t - 0.2;
    const t2 = t4 * t4;
    return -4 * t2 + 1.6 * t;
  } else if (t < 0.8) {
    const t4 = t - 0.5;
    return -2 * t4 + 0.4;
  } else {
    const t4 = t - 0.8;
    const t1 = 1 - t4;
    return 0.05 * t4 * t1;
  }
}
