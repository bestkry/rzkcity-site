import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/*
  Scroll-driven voxel assembly.
  - Builds a 4×4×4 "dirt/grass" cube AND a blocky character from scattered pieces.
  - The animation is tied to scroll progress via ScrollTrigger.scrub.
  - Respects prefers-reduced-motion (final state shown immediately, no scrub).
*/

// Original blocky character — NOT a Minecraft Steve, no copyrighted textures.
// Pure CSS color blocks: hood-grey body, gold visor, neon accent.
// Each entry: { x, y, w, h, color } in a 60×100 coord grid (approx 5px units).
const CHAR_PARTS = [
  // Head (10×10 grid, 5px units)
  { x: 22, y: 8, w: 16, h: 14, color: '#2a2a36' }, // head/hood
  { x: 26, y: 12, w: 8, h: 4, color: '#C8A24B' }, // visor band (gold)
  { x: 27, y: 13, w: 6, h: 2, color: '#5BE7FF' }, // neon strip
  // Neck
  { x: 28, y: 22, w: 4, h: 3, color: '#1c1c25' },
  // Torso
  { x: 20, y: 25, w: 20, h: 22, color: '#1f1f2a' },
  { x: 27, y: 30, w: 6, h: 8, color: '#3a2f12' }, // panel
  { x: 28, y: 31, w: 4, h: 2, color: '#C8A24B' }, // chest plate gold
  // Arms
  { x: 14, y: 26, w: 6, h: 20, color: '#15151e' },
  { x: 40, y: 26, w: 6, h: 20, color: '#15151e' },
  // Belt
  { x: 20, y: 46, w: 20, h: 3, color: '#0b0b12' },
  // Legs
  { x: 21, y: 49, w: 8, h: 22, color: '#1a1a23' },
  { x: 31, y: 49, w: 8, h: 22, color: '#1a1a23' },
  // Boots
  { x: 20, y: 70, w: 10, h: 5, color: '#0a0a10' },
  { x: 30, y: 70, w: 10, h: 5, color: '#0a0a10' },
];

// "Grass/dirt" cube: 4 layers × 4×4 = 64 cubes. We'll skip interior cubes for performance.
// Render only the outer shell pieces. Each: {layer, row, col, top}
const CUBE_SIZE = 4; // 4x4x4
function buildCubeBlocks() {
  const out = [];
  for (let l = 0; l < CUBE_SIZE; l++) {
    for (let r = 0; r < CUBE_SIZE; r++) {
      for (let c = 0; c < CUBE_SIZE; c++) {
        // only the shell to keep DOM light
        const isShell =
          l === 0 || l === CUBE_SIZE - 1 || r === 0 || r === CUBE_SIZE - 1 || c === 0 || c === CUBE_SIZE - 1;
        if (!isShell) continue;
        out.push({ l, r, c, top: l === 0 });
      }
    }
  }
  return out;
}

const CUBE_BLOCKS = buildCubeBlocks();

export default function VoxelBuild() {
  const sectionRef = useRef(null);
  const cubeWrapRef = useRef(null);
  const charWrapRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      // === Voxel cube assembly ===
      const cubeBlocks = cubeWrapRef.current.querySelectorAll('.cube-block');
      // Start: each block scattered in random offset + transparent
      cubeBlocks.forEach((el) => {
        gsap.set(el, {
          x: gsap.utils.random(-700, 700),
          y: gsap.utils.random(-500, 500),
          z: gsap.utils.random(-400, 400),
          rotateX: gsap.utils.random(-180, 180),
          rotateY: gsap.utils.random(-180, 180),
          rotateZ: gsap.utils.random(-45, 45),
          opacity: 0,
        });
      });

      if (reduced) {
        // Just snap to final
        gsap.set(cubeBlocks, { x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0, opacity: 1 });
      } else {
        gsap.to(cubeBlocks, {
          x: 0,
          y: 0,
          z: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: { amount: 0.8, from: 'random' },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center 30%',
            scrub: 0.5,
          },
        });

        // Add a gentle final rotation past completion
        gsap.to(cubeWrapRef.current, {
          rotateY: 25,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center 40%',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      }

      // === Character assembly ===
      const charParts = charWrapRef.current.querySelectorAll('.char-part');
      charParts.forEach((el) => {
        gsap.set(el, {
          x: gsap.utils.random(-400, 400),
          y: gsap.utils.random(-400, 400),
          rotate: gsap.utils.random(-90, 90),
          opacity: 0,
        });
      });

      if (reduced) {
        gsap.set(charParts, { x: 0, y: 0, rotate: 0, opacity: 1 });
      } else {
        gsap.to(charParts, {
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: { amount: 0.9, from: 'random' },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: 0.5,
          },
        });
      }

      // Headline letters reveal
      if (!reduced && headlineRef.current) {
        gsap.from(headlineRef.current.querySelectorAll('.reveal-line'), {
          y: 60,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="build"
      className="relative py-32 sm:py-48 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={headlineRef} className="max-w-3xl">
          <div className="text-[11px] tracking-[0.32em] uppercase text-gold/80 mb-5 reveal-line">
            <span className="inline-block w-8 h-px bg-gold/50 mr-3 align-middle" />
            01 · Świat z bloków
          </div>
          <h2 className="font-display uppercase leading-[0.95] text-[clamp(2rem,5.5vw,4.5rem)] headline-gradient headline-edge">
            <span className="block reveal-line">Skrolluj —</span>
            <span className="block reveal-line">świat <span className="text-gold">się składa.</span></span>
          </h2>
          <p className="mt-6 max-w-lg text-bone/65 text-[15px] leading-relaxed reveal-line">
            Każdy blok pojawia się dokładnie tam, gdzie ma być. Tak samo działa serwer: bez ściemy, bez chaosu.
            Trzymaj rękę na kółku myszy.
          </p>
        </div>

        {/* Stage */}
        <div className="mt-20 grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Voxel cube */}
          <div className="lg:col-span-7 relative h-[460px] sm:h-[560px] flex items-center justify-center">
            <CubeStage ref={cubeWrapRef} />
            <CornerTicks label="dirt block" />
          </div>

          {/* Voxel character */}
          <div className="lg:col-span-5 relative h-[460px] sm:h-[560px] flex items-center justify-center">
            <CharacterStage ref={charWrapRef} />
            <CornerTicks label="player.001" align="right" />
          </div>
        </div>
      </div>
    </section>
  );
}

// === Cube: 4x4x4 shell, rendered with CSS 3D ===
const CubeStage = React.forwardRef(function CubeStage(_, ref) {
  const size = 56; // px per voxel on desktop
  const totalSize = size * CUBE_SIZE;

  return (
    <div className="relative" style={{ perspective: '1200px' }}>
      <div
        ref={ref}
        className="relative"
        style={{
          width: totalSize,
          height: totalSize,
          transformStyle: 'preserve-3d',
          transform: 'rotateX(-22deg) rotateY(-28deg)',
        }}
      >
        {CUBE_BLOCKS.map(({ l, r, c, top }, i) => {
          // top layer = grass (gold-green), rest = dirt (deep brown / steel)
          let bg;
          if (top) {
            bg = 'linear-gradient(180deg, #8C6E2A 0%, #5a4818 30%, #2a2412 100%)';
          } else if (l === CUBE_SIZE - 1) {
            bg = 'linear-gradient(180deg, #1a1a23 0%, #0e0e16 100%)';
          } else {
            bg = 'linear-gradient(180deg, #3a2f12 0%, #221a08 100%)';
          }
          // Accent: a sparse neon-cyan edge cube for cyber tint
          const accent = (l + r + c) % 7 === 0 && !top;
          return (
            <div
              key={i}
              className="cube-block voxel-block"
              style={{
                background: bg,
                width: size,
                height: size,
                left: c * size,
                top: r * size,
                transform: `translateZ(${-l * size}px)`,
                boxShadow: accent
                  ? 'inset 0 0 0 1px rgba(91,231,255,0.55), 0 0 12px rgba(91,231,255,0.35)'
                  : undefined,
              }}
            />
          );
        })}
      </div>
    </div>
  );
});

// === Blocky character — pure CSS, no Minecraft textures ===
const CharacterStage = React.forwardRef(function CharacterStage(_, ref) {
  // Coordinate grid: 60×80. We'll scale to container.
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        ref={ref}
        className="relative"
        style={{ width: 300, height: 400 }}
      >
        {CHAR_PARTS.map((p, i) => (
          <div
            key={i}
            className="char-part absolute"
            style={{
              left: `${(p.x / 60) * 100}%`,
              top: `${(p.y / 80) * 100}%`,
              width: `${(p.w / 60) * 100}%`,
              height: `${(p.h / 80) * 100}%`,
              background: p.color,
              boxShadow:
                'inset 0 0 0 1px rgba(0,0,0,0.45), inset 0 -2px 0 rgba(0,0,0,0.3), inset 2px 0 0 rgba(255,255,255,0.04)',
            }}
          />
        ))}
        {/* Subtle ground shadow */}
        <div
          aria-hidden
          className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-40 h-3 rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(200,162,75,0.35) 0%, rgba(0,0,0,0) 70%)',
            filter: 'blur(2px)',
          }}
        />
      </div>
    </div>
  );
});

function CornerTicks({ label, align = 'left' }) {
  return (
    <div
      className={`pointer-events-none absolute top-3 ${
        align === 'right' ? 'right-3 text-right' : 'left-3'
      } font-mono text-[10px] tracking-[0.25em] uppercase text-gold/55`}
    >
      <div>// {label}</div>
      <div className="text-bone/30">rendering…</div>
    </div>
  );
}
