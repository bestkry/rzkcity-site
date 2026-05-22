import React from 'react';

const modes = [
  {
    code: 'M.01',
    name: 'RZKSMP',
    tagline: 'Twoja historia, twoje miasto.',
    body:
      'Survival multiplayer z ekonomią, ziemiami i sezonowymi wydarzeniami. Bez pay-to-win — graczy widać po tym, co zbudowali, nie po tym, co kupili.',
    tags: ['Survival', 'Eco', 'Land claim', 'Eventy'],
    accent: 'gold',
    media: {
      type: 'video',
      src: './rzksmp-animation.mp4',
      poster: './rzksmp-poster.jpg',
      label: 'RZKSMP survival render',
    },
  },
  {
    code: 'M.02',
    name: 'Skyblock',
    tagline: 'Pusta wyspa. Pełna głowa.',
    body:
      'Klasyczny rdzeń Skyblock z autorskimi misjami, ulepszeniami wyspy i rankingiem sezonowym. Grindy są krótkie, decyzje są długie.',
    tags: ['Wyspa', 'Misje', 'Ranking', 'Sezony'],
    accent: 'cyan',
    media: {
      type: 'video',
      src: './skyblock-animation.mp4',
      poster: './skyblock-poster.jpg',
      label: 'Skyblock island render',
    },
  },
];

export default function Modes() {
  return (
    <section id="tryby" className="relative py-32 sm:py-40">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-gold/80 mb-4">
              <span className="inline-block w-8 h-px bg-gold/50 mr-3 align-middle" />
              02 · Tryby gry
            </div>
            <h2 className="font-display uppercase leading-[0.95] text-[clamp(2rem,5vw,4rem)] headline-gradient">
              Dwa tryby.<br />Jedno miasto.
            </h2>
          </div>
          <div className="max-w-sm font-mono text-[11px] tracking-widest uppercase text-bone/45 leading-relaxed">
            // wybierasz wejście, nie wybierasz jakości — obie strony serwera
            trzymają ten sam poziom polerki.
          </div>
        </div>

        {/* Asymmetric grid: one big card spanning more, one narrower with stacked meta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Big card */}
          <ModeCard mode={modes[0]} large />
          {/* Smaller card */}
          <ModeCard mode={modes[1]} />
        </div>

        {/* Extra meta row — varied rhythm */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          <Stat k="0 P2W" v="zero pay-to-win" />
          <Stat k="24/7" v="serwer dostępny" />
          <Stat k="PL" v="moderacja PL" />
          <Stat k="1.20+" v="Java edition" />
        </div>
      </div>
    </section>
  );
}

function ModeCard({ mode, large = false }) {
  const isGold = mode.accent === 'gold';
  return (
    <article
      className={`relative group ${
        large ? 'lg:col-span-7' : 'lg:col-span-5'
      } bg-graphite/60 backdrop-blur-sm border border-gold/15 rounded-sm p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:border-gold/45`}
    >
      {/* Decorative voxel stack in the corner */}
      <div
        aria-hidden
        className={`absolute -top-6 -right-6 opacity-30 group-hover:opacity-60 transition-opacity duration-500 ${
          isGold ? 'text-gold' : 'text-neon-cyan'
        }`}
      >
        <VoxelDeco size={large ? 140 : 110} />
      </div>

      <div className="relative">
        {mode.media && (
          <div
            className={`relative mb-7 aspect-video overflow-hidden rounded-sm bg-ink/70 ${
              isGold ? 'border border-gold/25 shadow-gold-glow' : 'border border-neon-cyan/25 shadow-neon-glow'
            }`}
          >
            {mode.media.type === 'video' ? (
              <video
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100"
                src={mode.media.src}
                poster={mode.media.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={mode.media.label}
              />
            ) : (
              <img
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100"
                src={mode.media.src}
                alt={mode.media.label}
                loading="lazy"
                decoding="async"
              />
            )}
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent ${
                isGold ? 'to-gold/10' : 'to-neon-cyan/10'
              }`}
            />
            <div
              className={`pointer-events-none absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.25em] ${
                isGold ? 'text-gold/80' : 'text-neon-cyan/80'
              }`}
            >
              // {mode.name.toLowerCase()} render
            </div>
            <div
              className={`pointer-events-none absolute bottom-4 right-4 h-2 w-16 ${
                isGold
                  ? 'bg-gold/80 shadow-[0_0_24px_rgba(200,162,75,0.75)]'
                  : 'bg-neon-cyan/80 shadow-[0_0_24px_rgba(91,231,255,0.8)]'
              }`}
            />
          </div>
        )}

        <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-bone/45">
          <span>{mode.code}</span>
          <span className="w-6 h-px bg-current opacity-30" />
          <span className={isGold ? 'text-gold' : 'text-neon-cyan'}>aktywny</span>
        </div>

        <h3
          className={`mt-4 font-display uppercase text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] ${
            large ? 'text-bone' : 'text-bone'
          }`}
        >
          {mode.name}
        </h3>
        <p className={`mt-2 italic text-base ${isGold ? 'text-gold-bright' : 'text-neon-cyan'}`}>
          {mode.tagline}
        </p>

        <p className="mt-6 max-w-md text-bone/70 leading-relaxed text-[15px]">{mode.body}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {mode.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] tracking-[0.15em] uppercase px-3 py-1 border border-gold/25 text-bone/70 rounded-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-gold/15 pt-5">
          <span className="font-mono text-[11px] tracking-widest uppercase text-bone/40">
            // /play {mode.name.toLowerCase()}
          </span>
          <span
            className={`text-[12px] tracking-[0.25em] uppercase ${
              isGold ? 'text-gold-bright' : 'text-neon-cyan'
            } group-hover:translate-x-1 transition-transform duration-300`}
          >
            Wbij →
          </span>
        </div>
      </div>
    </article>
  );
}

function Stat({ k, v }) {
  return (
    <div className="border border-gold/15 bg-coal/40 rounded-sm p-4">
      <div className="font-display text-2xl text-gold-bright">{k}</div>
      <div className="font-mono text-[10px] tracking-widest uppercase text-bone/55 mt-1">
        {v}
      </div>
    </div>
  );
}

function VoxelDeco({ size = 120 }) {
  // Small isometric stack of blocks
  const s = size / 8;
  const blocks = [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [0, 2],
  ];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      {blocks.map(([x, y], i) => (
        <rect
          key={i}
          x={size / 2 + x * s - y * s}
          y={size / 2 - x * s * 0.5 - y * s * 0.5 + (i * s) / 2}
          width={s * 1.6}
          height={s * 1.6}
          fill="currentColor"
          opacity={0.18 + i * 0.05}
          transform={`translate(${-s}, ${-s})`}
        />
      ))}
    </svg>
  );
}
